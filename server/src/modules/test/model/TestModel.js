import db from '../../../database/connection.js';

export const post = async (test) => {
	const { year, stage } = test;
	const addTest = `INSERT INTO test (year, stage) VALUES (?, ?) ON DUPLICATE KEY UPDATE stage=stage`;
	const selectTest = `SELECT id FROM test WHERE year = ? AND stage = ?`;

	await db.promise().query(addTest, [year, stage]);
	const [id] = await db.promise().query(selectTest, [year, stage]);

	return id;
};

export const get = async (params) => {
	const buildConditions = () => {
		var conditions = [];
		var values = [];

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

	const sql = 'SELECT * FROM test t WHERE ' + conditions.where;
	const [rows] = await db.promise().query(sql, conditions.values);

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
