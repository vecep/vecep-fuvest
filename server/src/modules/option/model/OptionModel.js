import db from '../../../database/connection.js';

export const post = async (option) => {
	const sql = `INSERT INTO \`option\` (text, correct_answer, question_id, image_id)
  VALUES (?, ?, ?, ?)`;
	const { text, correctAnswer: correct_answer, question_id, image_id } = option;

	return db.promise().query(sql, [text, correct_answer, question_id, image_id]);
};

export const get = async () => {
	const sql = `SELECT
		o.id,
		o.text,
		o.correct_answer as 'correctAnswer',
		o.question_id as 'questionId',
		JSON_OBJECT(
			'description', image.description,
			'cloudId', image.cloud_id
		) as image
		FROM \`option\` o
		LEFT JOIN image ON image.id = o.image_id`;
	const [rows] = await db.promise().query(sql);

	return rows;
};

export const getOneById = async (id) => {
	const sql = `
		SELECT
		o.id,
		o.text,
		o.correct_answer as 'correctAnswer',
		o.question_id as 'questionId',
		JSON_OBJECT(
			'description', image.description,
			'cloudId', image.cloud_id
		) as image
		FROM \`option\` o
		LEFT JOIN image ON image.id = o.image_id
		WHERE o.id = ?`;
	const [row] = await db.promise().query(sql, id);

	return row;
};

export const put = async (id, data) => {
	const sql = `UPDATE \`option\` SET
  text = ?, correct_answer = ?, question_id = ?, image_id = ?
  WHERE id = ?`;
	const { text, correct_answer, question_id, image_id } = data;

	return db.promise().query(sql, [text, correct_answer, question_id, image_id, id]);
};

export const destroy = async (id) => {
	const sql = 'DELETE FROM `option` WHERE id = ?';

	return db.promise().query(sql, id);
};
