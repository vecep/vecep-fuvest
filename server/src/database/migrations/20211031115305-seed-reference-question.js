'use strict';
const reference_questions = require('./seeders/reference_question.js');

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
		reference_questions.map((rq) =>
			db.insert('reference_question', ['question_id', 'reference_id'], rq)
		)
	);
};

exports.down = function (db) {
	return db.runSql('DELETE FROM reference_question');
};

exports._meta = {
	version: 1
};
