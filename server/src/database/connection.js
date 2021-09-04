var knex = require('knex')({
  client: 'mysql2',
  connection: {
      host : 'localhost',
      user : 'root',
      password : 'password',
      database : 'vecep'
   }
});

module.exports = knex;
