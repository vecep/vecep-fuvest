import db from '../../../database/connection.js';

export const post = async (exercises) => {
	const conn = await db.promise().getConnection();

	const insertQuestion = 'INSERT INTO question (text, subject, topic, test_id) VALUES (?, ?, ?, ?)';
	const insertReferenceQuestion =
		'INSERT INTO reference_question (reference_id, question_id) VALUES (?, ?)';
	const insertOption = `INSERT INTO \`option\` (text, correct_answer, question_id)
  VALUES (?, ?, ?)`;

	try {
		await conn.beginTransaction();

		await Promise.all(
			exercises.map(async (exercise) => {
				const { test_id, question, references, options } = exercise;
				const { subject, topic } = question;

				return await conn
					.query(insertQuestion, [question.text, subject, topic, test_id])
					.then(async ([{ insertId: question_id }]) =>
						Promise.all(
							references.map(
								async (reference_id) =>
									await conn.query(insertReferenceQuestion, [reference_id, question_id])
							)
						).then(() =>
							Promise.all(
								options.map(async (option) => {
									const { correct_answer } = option;

									return await conn.query(insertOption, [option.text, correct_answer, question_id]);
								})
							)
						)
					);
			})
		);

		await conn.commit();
		conn.release();
	} catch (err) {
		await conn.rollback();
		conn.release();
		throw err;
	}
};

export const get = async () => {
	const sql = `
    SELECT
    JSON_OBJECT('id', t.id, 'year', t.year, 'stage', t.stage) AS test,
    JSON_OBJECT('id', q.id, 'text', q.text, 'subject', q.subject, 'topic', q.topic) AS question,
    CONCAT('[', GROUP_CONCAT(
    DISTINCT JSON_OBJECT('id', o.id, 'text', o.\`text\`, 'correct_answer', o.correct_answer)
    ), ']') as \`options\`, 
    CONCAT('[', GROUP_CONCAT(
    DISTINCT JSON_OBJECT('id', r.id, 'text', r.\`text\`, 'author', r.author, 'source', r.source, 'image_path', r.image_path)
    ), ']') as \`references\`
    FROM question q
    INNER JOIN test t
    ON t.id = q.test_id 
    INNER JOIN \`option\` o
    ON o.question_id = q.id
    INNER JOIN reference_question rq
    ON rq.question_id = q.id
    INNER JOIN reference r
    ON r.id = rq.reference_id
    GROUP BY q.id;
  `;

	const [data] = await db.promise().query(sql);

	return data;
};

export const destroy = async (id) => {
	const deleteOptions = 'DELETE FROM `option` WHERE question_id = ?';
	const deleteReferenceRelation = 'DELETE FROM reference_question WHERE question_id = ?';
	const deleteQuestion = 'DELETE FROM question WHERE id = ?';

	return Promise.all([
		db.promise().query(deleteOptions, id),
		db.promise().query(deleteReferenceRelation, id)
	]).then(() => db.promise().query(deleteQuestion, id));
};
