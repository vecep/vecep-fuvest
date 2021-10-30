import { createPool } from 'mysql2';
import dbConfig from '../config/db.config.js';

const connectionPool = createPool({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});

export default connectionPool;
