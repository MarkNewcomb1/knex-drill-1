// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///knex-drill-1'
  },
  
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
