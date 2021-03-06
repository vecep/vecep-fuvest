import db from '../../../database/connection.js';

export const postReferenceQuestion = async (question_id, reference_id) => {
	const sql = 'INSERT INTO reference_question (reference_id, question_id) VALUES (?, ?)';

	return db.promise().query(sql, [reference_id, question_id]);
};

export const get = async (params) => {
	const buildConditions = () => {
		var conditions = [];
		var values = [];

		if (params.subject) {
			conditions.push('q.subject = ?');
			values.push(params.subject);
		}

		if (params.topic) {
			conditions.push('q.topic = ?');
			values.push(params.topic);
		}

		if (params.year) {
			conditions.push('t.year = ?');
			values.push(parseInt(params.year));
		}

		if (params.stage) {
			conditions.push('t.stage = ?');
			values.push(parseInt(params.stage));
		}

		return {
			where: conditions.length ? conditions.join(' AND ') : '1',
			values: values
		};
	};

	var conditions = buildConditions();

	const sql =
		`
    SELECT
    JSON_OBJECT(
      'id', t.id,
      'year', t.year,
      'stage', t.stage
    ) AS test,
    JSON_OBJECT(
      'id', q.id,
      'text', q.text,
      'subject', q.subject,
      'topic', q.topic
    ) AS question,
    CONCAT('[', GROUP_CONCAT(DISTINCT o.id), ']') as \`options\`, 
    CONCAT('[', GROUP_CONCAT(DISTINCT r.id), ']') as \`references\`
    FROM question q
    INNER JOIN test t
    ON t.id = q.test_id 
    INNER JOIN \`option\` o
    ON o.question_id = q.id
    LEFT JOIN reference_question rq
    ON rq.question_id = q.id
    LEFT JOIN reference r
    ON r.id = rq.reference_id
    LEFT JOIN image
    ON image.id = r.image_id OR image.id = o.image_id
		WHERE ` +
		conditions.where +
		`
		GROUP BY q.id
  `;
	await db.promise().execute('SET SESSION group_concat_max_len = 60000');

	const [data] = await db.promise().query(sql, conditions.values);

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

export const getTotal = async () => {
	const sql = "SELECT COUNT(q.id) as 'total' FROM question q";

	const [data] = await db.promise().query(sql);

	return data;
};
