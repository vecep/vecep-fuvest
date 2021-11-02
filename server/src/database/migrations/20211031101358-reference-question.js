'use strict';

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
	return db.runSql(`
		CREATE TABLE \`reference_question\` (
			\`reference_id\` int NOT NULL,
			\`question_id\` int NOT NULL,
			KEY \`reference_id\` (\`reference_id\`),
			KEY \`question_id\` (\`question_id\`),
			CONSTRAINT \`reference_question_ibfk_1\` FOREIGN KEY (\`reference_id\`) REFERENCES \`reference\` (\`id\`),
			CONSTRAINT \`reference_question_ibfk_2\` FOREIGN KEY (\`question_id\`) REFERENCES \`question\` (\`id\`)
		) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci
	`);
};

exports.down = function (db) {
	return db.runSql('DROP TABLE `reference_question`');
};

exports._meta = {
	version: 1
};
