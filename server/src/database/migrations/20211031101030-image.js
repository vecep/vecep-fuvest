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
		CREATE TABLE \`image\` (
			\`id\` int NOT NULL AUTO_INCREMENT,
			\`description\` varchar(450) NOT NULL,
			\`cloud_id\` varchar(100) NOT NULL,
			PRIMARY KEY (\`id\`)
		) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
	`);
};

exports.down = function (db) {
	return db.runSql('DROP TABLE `image`');
};

exports._meta = {
	version: 1
};
