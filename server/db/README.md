# new migration:
knex migrate:make <migration_name>

# run migrations
knex migrate:up
knex migrate:latest
knex migrate:down
knex migrate:rollback

$ knex seed:make seed_name
$ knex seed:run
$ knex seed:run --specific=seed-filename.js

#docs
http://knexjs.org