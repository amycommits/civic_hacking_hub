# civic-hacking-hub

> Civic Hacking is when you use your skills to build tools for non-profits that may not otherwise be able to afford it.

> This repo exists because I believe that it should be easier to find these types of projects.

## Build setup

## Database setup

civic-hacking-hub uses a relational database (postgresql) to store data. 
You can download postgresql [here](https://www.postgresql.org/download/).

After download postgresql you need to create the database:

```bash
    $ psql -U postgres
    $ CREATE DATABASE civic_hacking;
```

### Application database configurations

Like a best practice, all database configurations are externalized from the application:

> An app’s config is everything that is likely to vary between deploys 
>  (staging, production, developer environments, etc). This includes:
> Resource handles to the database, Memcached, and other backing services. See [12factor](https://12factor.net/config) for more details.

### Creating secret.js file
Is necessary to create a `secret.js` (used by `knexfilex.js`) file in root folder, you can do easily running this command:

```bash
    $ cp secrets.example.js secrets.js
```

### Configuring database credentials
You have two ways to configure your database credentials:

- Using env vars

    Configure your environment with database credentials running:

    ```bash
        $ export DB_USER_NAME=your_database_user_name_here
        $ export DB_PASSWORD=your_database_password_here
    ```

- Changing secrets.js file

    ```javascript
    // secrets.js
    module.exports = {
    DB_USER_NAME: process.env.DB_USER_NAME || 'YOUR_DATABASE_USER_NAME_HERE',
    DB_PASSWORD: process.env.DB_PASSWORD || 'YOUR_DATABASE_PASSWORD_HERE'
    }
    ```

How you can see, env vars has precedence, if you use both configurations env var will win, we recommend using env vars.

## Dependencies

## Be on node version v12.21.0
$ nvm use v12.21.0

``` bash
# install dependencies
$ npm run install
$ knex migrate:latest
$ knex seed:run

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Contributing
Look for the Contributions.md file.

## Contact
Discord: amyd - 40#2999
