import { createPool } from 'mysql2';
import dbConfig from './db.config.js';

export default connectionPool = createPool({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});
