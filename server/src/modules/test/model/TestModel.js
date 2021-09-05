const db = require('../../../database/connection');

exports.post = test =>
  db.insert(test).table('test');

exports.get = () =>
  db.select('*').table('test');

exports.getOneById = id =>
  db.select('*').table('test').where({ id });

exports.put = (id, data) =>
  db.update({ id, ...data }).table('test').where({ id });

exports.delete = id =>
  db.delete().table('test').where({ id });
