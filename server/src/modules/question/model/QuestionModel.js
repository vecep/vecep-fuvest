import db from '../../../database/connection.js';

export const post = async (question) => {
  const sql = 'INSERT INTO question (text, subject, topic, test_id) VALUES (?, ?, ?, ?)';
  const { text, subject, topic, test_id } = question;

  return db.promise().query(sql, [text, subject, topic, test_id]);
}

export const get = async () => {
  const sql = 'SELECT * FROM question';
  const [rows] = await db.promise().query(sql);

  return rows;
}


export const getOneById = async id => {
  const sql = 'SELECT * FROM question WHERE id = ?';
  const [row] = await db.promise().query(sql, id);

  return row;
}

export const put = async (id, data) => {
  const sql = `UPDATE question SET
  text = ?, subject = ?, topic = ?, test_id = ?
  WHERE id = ?`;
  const { text, subject, topic, test_id } = data;

  return db.promise().query(sql, [text, subject, topic, test_id, id]);
}

export const destroy = async id => {
  const sql = 'DELETE FROM question WHERE id = ?';

  return db.promise().query(sql, id);
}
