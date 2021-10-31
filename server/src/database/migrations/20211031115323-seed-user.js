'use strict';
const users = require('./seeders/user.js');

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
	dbm = options.dbmigrate;
	type = dbm.dataType;
	seed = seedLink;
};

exports.up = function (db) {
	return Promise.all(
		users.map((user) => db.insert('user', ['username', 'email', 'password', 'isAdmin'], user))
	);
};

exports.down = function (db) {
	return db.runSql('DELETE FROM user');
};

exports._meta = {
	version: 1
};
