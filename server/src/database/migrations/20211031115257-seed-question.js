'use strict';
const questions = require('./seeders/question.js');

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
		questions.map((question) =>
			db.insert('question', ['test_id', 'text', 'subject', 'topic'], question)
		)
	);
};

exports.down = function (db) {
	return db.runSql('DELETE FROM question');
};

exports._meta = {
	version: 1
};
