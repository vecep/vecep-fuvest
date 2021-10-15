import db from '../../../database/connection.js';

export const post = async (reference) => {
	const sql = 'INSERT INTO reference (text, author, source, image_id) VALUES (?, ?, ?, ?)';
	const { text, author, source, image_id } = reference;

	return db.promise().query(sql, [text, author, source, image_id]);
};

export const get = async () => {
	const sql = `
	SELECT
	r.id,
	r.text,
	r.author,
	r.source,
	JSON_OBJECT(
		'description', image.description,
		'cloudId', image.cloud_id
	) as image
	FROM reference r
	LEFT JOIN image ON image.id = r.image_id`;
	const [rows] = await db.promise().query(sql);

	return rows;
};

export const getOneById = async (id) => {
	const sql = `
		SELECT
		r.id,
		r.text,
		r.author,
		r.source,
		JSON_OBJECT(
			'description', image.description,
			'cloudId', image.cloud_id
		) as image
		FROM reference r
		LEFT JOIN image ON image.id = r.image_id
		WHERE r.id = ?`;
	const [row] = await db.promise().query(sql, id);

	return row;
};

export const put = async (id, data) => {
	const sql = `UPDATE reference SET
    text = ?, author = ?, source = ?, image_id = ?
    WHERE id = ?`;

	const { text, author, source, image_id } = data;

	return db.promise().query(sql, [text, author, source, image_id, id]);
};

export const destroy = async (id) => {
	const sql = 'DELETE FROM reference WHERE id = ?';

	return db.promise().query(sql, id);
};
