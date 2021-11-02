import fs from 'fs';

const { dev: config } = JSON.parse(fs.readFileSync('src/database/database.json'));

export default {
	HOST: config.host,
	USER: config.user,
	PASSWORD: config.password,
	DB: config.database
};
