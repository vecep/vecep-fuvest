'use strict';
const options = require('./seeders/option.js');

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
		options.map((option) =>
			db.insert('option', ['question_id', 'text', 'correct_answer', 'image_id'], option)
		)
	);
};

exports.down = function (db) {
	return db.runSql('DELETE FROM `option`');
};

exports._meta = {
	version: 1
};
