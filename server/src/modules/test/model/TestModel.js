import db from '../../../database/connection.js';

export const post = async (test) => {
	const { year, stage } = test;
	const addTest = `INSERT INTO test (year, stage) VALUES (?, ?) ON DUPLICATE KEY UPDATE stage=stage`;
	const selectTest = `SELECT id FROM test WHERE year = ? AND stage = ?`;

	await db.promise().query(addTest, [year, stage]);
	const [id] = await db.promise().query(selectTest, [year, stage]);

	return id;
};

export const get = async () => {
	const sql = 'SELECT * FROM test';
	const [rows] = await db.promise().query(sql);

	return rows;
};

export const getOneById = async (id) => {
	const sql = 'SELECT * FROM test WHERE id = ?';
	const [row] = await db.promise().query(sql, id);

	return row;
};

export const put = async (id, data) => {
	const sql = 'UPDATE test SET year = ?, stage = ? WHERE id = ?';
	const { year, stage } = data;

	return db.promise().query(sql, [year, stage, id]);
};

export const destroy = async (id) => {
	const sql = 'DELETE FROM test WHERE id = ?';

	return db.promise().query(sql, id);
};
