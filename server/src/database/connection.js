import { createConnection } from 'mysql2';
import dbConfig from './db.config.js';

const connection = createConnection({
   host: dbConfig.HOST,
   user: dbConfig.USER,
   password: dbConfig.PASSWORD,
   database: dbConfig.DB
});

connection.connect(err => {
   if (err) throw err;
   console.log('Successfully connected to the database.');
})

export default connection;
