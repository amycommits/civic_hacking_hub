exports.up = function(knex) {
  return knex.schema.createTable('code_organizations', function(table) {
    table.increments('id')
    table.string('name', 250)
    table.string('url', 250)
    table.string('description', 500)

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('code_organizations')
}
