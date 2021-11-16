import db from '../../../database/connection.js';

export const post = async (user) => {
	const { username, email, password } = user;
	const sql = `INSERT INTO user (username, email, password, isAdmin) VALUES (?, ?, ?, false)`;

	return await db.promise().query(sql, [username, email, password]);
};

export const getOne = async (params) => {
	const buildConditions = () => {
		var conditions = [];
		var values = [];

		if (params.id) {
			conditions.push('u.id = ?');
			values.push(parseInt(params.id));
		}

		if (params.username) {
			conditions.push('u.username = ?');
			values.push(params.username);
		}

		if (params.email) {
			conditions.push('u.email = ?');
			values.push(params.email);
		}

		return {
			where: conditions.length ? conditions.join(' AND ') : '0',
			values: values
		};
	};

	var conditions = buildConditions();

	const sql = 'SELECT * FROM user u WHERE ' + conditions.where;
	const [row] = await db.promise().query(sql, conditions.values);

	return row;
};

export const answer = async (userId, selectedAnswer) => {
	const sql = `INSERT INTO user_option (user_id, option_id) VALUES (?, ?)`;

	return await db.promise().query(sql, [userId, selectedAnswer]);
};

export const getAnswers = async (id) => {
	const sql = `SELECT 
	JSON_ARRAYAGG(user_option.option_id) as \`answers\`
	FROM user_option
	WHERE user_option.user_id = ?`;

	const [row] = await db.promise().query(sql, [id]);

	return row;
};

export const destroyAnswer = async (optionId, userId) => {
	const sql = `DELETE FROM user_option WHERE option_id = ? AND user_id = ?`;

	return await db.promise().query(sql, [optionId, userId]);
};

export const getGeneralStatistics = async (userId) => {
	const sql = `SELECT
	COUNT(uo.option_id) as \`totalAnswers\`,
	COUNT(DISTINCT q.test_id) as \`totalTests\`,
	CAST(SUM(o.correct_answer) as UNSIGNED) as \`totalRightAnswers\`
	FROM user_option uo
	INNER JOIN \`option\` o
	ON o.id = uo.option_id
	INNER JOIN question q
	ON q.id = o.question_id
	WHERE uo.user_id = ?;`;

	const [row] = await db.promise().query(sql, [userId]);

	return row;
};

export const getStatsBySubject = async (userId) => {
	const sql = `SELECT
	q.subject as 'name', COUNT(q.subject) as 'totalAnswered',
	CAST(SUM(o.correct_answer) as UNSIGNED) as 'rightAnswers'
	FROM user_option uo
	INNER JOIN \`option\` o
	ON o.id = uo.option_id
	INNER JOIN question q
	ON q.id = o.question_id
	WHERE uo.user_id = ?
	GROUP BY q.subject;`;

	const [row] = await db.promise().query(sql, [userId]);

	return row;
};
