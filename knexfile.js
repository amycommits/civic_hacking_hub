module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      database: 'civic_hacking',
      user: 'eback',
      password: 'eback',
      schema: 'my_schema'
    },
    migrations: {
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds'
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
      directory: './server/db/seeds'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}
