const optionalRequire = require('optional-require')(require)
const secrets = optionalRequire('./secrets.js', true)

module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      database: 'civic_hacking',
      user: secrets.DB_USER_NAME || 'postgres',
      password: secrets.DB_PASSWORD || '',
      schema: 'my_schema'
    },
    migrations: {
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds/development'
    }
  },

  production: {
    client: 'pg',
    debug: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './server/db/migrations'
    },
    ssl: true,
    seeds: {
      directory: './server/db/seeds/production'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}
