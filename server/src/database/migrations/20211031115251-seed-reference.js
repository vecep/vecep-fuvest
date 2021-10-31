'use strict';
const references = require('./seeders/reference.js');

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
		references.map((reference) =>
			db.insert('reference', ['text', 'author', 'source', 'image_id'], reference)
		)
	);
};

exports.down = function (db) {
	return db.runSql('DELETE FROM reference');
};

exports._meta = {
	version: 1
};
