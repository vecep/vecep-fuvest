const db = require('../../../database/connection');

exports.post = question =>
  db.insert(question).table('question');

exports.get = () =>
  db.select('*').table('question');

exports.getOneById = id =>
  db.select('*').table('question').where({ id });

exports.put = (id, data) =>
  db.update({ id, ...data }).table('question').where({ id });

exports.delete = id =>
  db.delete().table('question').where({ id });
