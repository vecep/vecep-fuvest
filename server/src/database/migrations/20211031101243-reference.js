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
		CREATE TABLE \`reference\` (
			\`id\` int NOT NULL AUTO_INCREMENT,
			\`text\` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
			\`author\` varchar(50) DEFAULT NULL,
			\`source\` varchar(120) DEFAULT NULL,
			\`image_id\` int DEFAULT NULL,
			PRIMARY KEY (\`id\`),
			KEY \`reference_FK\` (\`image_id\`),
			CONSTRAINT \`reference_FK\` FOREIGN KEY (\`image_id\`) REFERENCES \`image\` (\`id\`) ON DELETE RESTRICT ON UPDATE RESTRICT
		) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
	`);
};

exports.down = function (db) {
	return db.runSql('DROP TABLE `reference`');
};

exports._meta = {
	version: 1
};
