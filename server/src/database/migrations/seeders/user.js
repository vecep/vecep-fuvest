const bcrypt = require('bcryptjs');

const users = [
	{
		username: 'plotter',
		email: 'plotter@email.com',
		password: bcrypt.hashSync('password', 8),
		isAdmin: true
	}
];

module.exports = users.map((user) => Object.values(user));
