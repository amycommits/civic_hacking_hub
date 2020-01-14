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
    // ,
    // pool: {
    //   afterCreate: (conn, cb) => {
    //     conn.run('PRAGMA foreign_keys = ON', cb);
    //   }
    // }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'example'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}
