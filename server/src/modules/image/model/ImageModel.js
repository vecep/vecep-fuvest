import db from '../../../database/connection.js';

export const post = async (image) => {
	const sql = 'INSERT INTO image (description, cloud_id) VALUES (?, ?)';
	const { description, cloud_id } = image;

	return db.promise().query(sql, [description, cloud_id]);
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
	const sql = 'UPDATE image SET description = ?, cloud_id = ? WHERE id = ?';
	const { description, cloud_id } = data;

	return db.promise().query(sql, [description, cloud_id, id]);
};

export const destroy = async (id) => {
	const sql = 'DELETE FROM image WHERE id = ?';

	return db.promise().query(sql, id);
};

export const patchOnHook = async (old_id, new_id) => {
	const sql = 'UPDATE image SET cloud_id = ? WHERE cloud_id = ?';

	return db.promise().query(sql, [new_id, old_id]);
};

export const destroyOnHook = async (id) => {
	const sql = 'DELETE FROM image WHERE cloud_id = ?';

	return db.promise().query(sql, id);
};
