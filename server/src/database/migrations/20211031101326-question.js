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
		CREATE TABLE \`question\` (
			\`id\` int NOT NULL AUTO_INCREMENT,
			\`text\` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
			\`subject\` varchar(20) NOT NULL,
			\`topic\` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
			\`test_id\` int NOT NULL,
			PRIMARY KEY (\`id\`),
			KEY \`test_id\` (\`test_id\`),
			CONSTRAINT \`question_ibfk_1\` FOREIGN KEY (\`test_id\`) REFERENCES \`test\` (\`id\`)
		) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
	`);
};

exports.down = function (db) {
	return db.runSql('DROP TABLE `question`');
};

exports._meta = {
	version: 1
};
