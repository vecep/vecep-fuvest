import db from '../../../database/connection.js';

export const post = async (image) => {
	const sql = 'INSERT INTO image (description, image_path) VALUES (?, ?)';
	const { description, image_path } = image;

	return db.promise().query(sql, [description, image_path]);
};

export const get = async () => {
	const sql = 'SELECT * FROM image';
	const [rows] = await db.promise().query(sql);

	return rows;
};

export const getOneById = async (id) => {
	const sql = 'SELECT * FROM image WHERE id = ?';
	const [row] = await db.promise().query(sql, id);

	return row;
};

export const put = async (id, data) => {
	const sql = 'UPDATE image SET description = ?, image_path = ? WHERE id = ?';
	const { description, image_path } = data;

	return db.promise().query(sql, [description, image_path, id]);
};

export const destroy = async (id) => {
	const sql = 'DELETE FROM image WHERE id = ?';

	return db.promise().query(sql, id);
};
