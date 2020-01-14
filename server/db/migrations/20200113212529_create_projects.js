exports.up = function(knex) {
  return knex.schema.createTable('projects', function(table) {
    table.increments('id')
    table.string('name', 250)
    table.string('description', 500)
    table.string('github_link', 250)
    table.string('setup_link', 250)
    table.integer('code_organization_id').unsigned()
    table.integer('nonprofit_organization_id').unsigned()
    table.integer('user_created_id').unsigned()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at')

    table.foreign('code_organization_id').references('code_organizations.id')
    table
      .foreign('nonprofit_organization_id')
      .references('nonprofit_organizations.id')
    table.foreign('user_created_id').references('users.id')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
}
