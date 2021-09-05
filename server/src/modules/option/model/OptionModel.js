const db = require('../../../database/connection');

exports.post = option =>
  db.insert(option).table('option');

exports.get = () =>
  db.select('*').table('option');

exports.getOneById = id =>
  db.select('*').table('option').where({ id });

exports.put = (id, data) =>
  db.update({ id, ...data }).table('option').where({ id });

exports.delete = id =>
  db.delete().table('option').where({ id });
