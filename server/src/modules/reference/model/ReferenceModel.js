const db = require('../../../database/connection');

exports.post = reference =>
  db.insert(reference).table('reference');

exports.get = () =>
  db.select('*').table('reference');

exports.getOneById = id =>
  db.select('*').table('reference').where({ id });

exports.put = (id, data) =>
  db.update({ id, ...data }).table('reference').where({ id });

exports.delete = id =>
  db.delete().table('reference').where({ id });
