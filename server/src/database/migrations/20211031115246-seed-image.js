'use strict';
const images = require('./seeders/image.js');

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
	return Promise.all(images.map((image) => db.insert('image', ['description', 'cloud_id'], image)));
};

exports.down = function (db) {
	return db.runSql('DELETE FROM image');
};

exports._meta = {
	version: 1
};
