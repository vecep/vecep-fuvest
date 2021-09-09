import db from '../../../database/connection.js';

export const post = async (option) => {
  const sql = `INSERT INTO \`option\` (text, correct_answer, question_id)
  VALUES (?, ?, ?)`;
  const { text, correct_answer, question_id } = option;

  return db.promise().query(sql, [text, correct_answer, question_id]);
}

export const get = async () => {
  const sql = 'SELECT * FROM \`option\`';
  const [rows] = await db.promise().query(sql);

  return rows;
}

export const getOneById = async id => {
  const sql = 'SELECT * FROM \`option\` WHERE id = ?';
  const [row] = await db.promise().query(sql, id);

  return row;
}

export const put = async (id, data) => {
  const sql = `UPDATE \`option\` SET
  text = ?, correct_answer = ?, question_id = ?
  WHERE id = ?`;
  const { text, correct_answer, question_id } = data;

  return db.promise().query(sql, [text, correct_answer, question_id, id]);
}

export const destroy = async id => {
  const sql = 'DELETE FROM \`option\` WHERE id = ?';

  return db.promise().query(sql, id);
}
