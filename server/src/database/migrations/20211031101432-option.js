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
		CREATE TABLE \`option\` (
			\`id\` int NOT NULL AUTO_INCREMENT,
			\`text\` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
			\`correct_answer\` tinyint(1) NOT NULL,
			\`question_id\` int NOT NULL,
			\`image_id\` int DEFAULT NULL,
			PRIMARY KEY (\`id\`),
			KEY \`question_id\` (\`question_id\`),
			KEY \`option_FK\` (\`image_id\`),
			CONSTRAINT \`option_FK\` FOREIGN KEY (\`image_id\`) REFERENCES \`image\` (\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT,
			CONSTRAINT \`option_ibfk_1\` FOREIGN KEY (\`question_id\`) REFERENCES \`question\` (\`id\`)
		) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci
	`);
};

exports.down = function (db) {
	return db.runSql('DROP TABLE `option`');
};

exports._meta = {
	version: 1
};
