exports.up = function (knex) {
  return knex.schema.createTable('code_project_nonprofits', function (table) {
    table.integer('code_organization_id').unsigned()
    table.integer('nonprofit_organization_id').unsigned()
    table.integer('project_id').unsigned()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at')

    table
      .foreign('code_organization_id')
      .references('code_organizations.id')
    table
      .foreign('nonprofit_organization_id')
      .references('nonprofit_organizations.id')
    table
      .foreign('project_id')
      .references('projects.id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('code_project_nonprofits')
}
