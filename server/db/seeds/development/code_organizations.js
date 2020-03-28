exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('code_organizations')
    .select('name')
    .then(function(existingOrgs) {
      // Inserts seed entries
      existingOrgs = existingOrgs.map((x) => x.name)
      const seedOrgs = [
        { name: 'Ruby For Good' },
        { name: 'Code for America' },
        { name: 'Code for DC' }
      ]
      const newOrgs = seedOrgs.filter((x) => !existingOrgs.includes(x.name))
      return knex('code_organizations').insert(newOrgs)
    })
}
