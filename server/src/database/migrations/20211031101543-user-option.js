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
		CREATE TABLE \`user_option\` (
			\`user_id\` int NOT NULL,
			\`option_id\` int NOT NULL,
			KEY \`user_id\` (\`user_id\`),
			KEY \`option_id\` (\`option_id\`),
			CONSTRAINT \`user_option_ibfk_1\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\` (\`id\`),
			CONSTRAINT \`user_option_ibfk_2\` FOREIGN KEY (\`option_id\`) REFERENCES \`option\` (\`id\`)
		) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci
	`);
};

exports.down = function (db) {
	return db.runSql('DROP TABLE `user_option`');
};

exports._meta = {
	version: 1
};
