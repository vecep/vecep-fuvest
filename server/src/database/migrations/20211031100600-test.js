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
		CREATE TABLE \`test\` (
			\`id\` int NOT NULL AUTO_INCREMENT,
			\`year\` int NOT NULL,
			\`stage\` int NOT NULL,
			PRIMARY KEY (\`id\`),
			UNIQUE KEY \`test_year_IDX\` (\`year\`,\`stage\`) USING BTREE
		) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
	`);
};

exports.down = function (db) {
	return db.runSql('DROP TABLE `test`');
};

exports._meta = {
	version: 1
};
