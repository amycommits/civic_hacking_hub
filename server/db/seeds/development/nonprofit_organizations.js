exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nonprofit_organizations')
    .select('name')
    .then(function(existingOrgs) {
      existingOrgs = existingOrgs.map((x) => x.name)
      const seedOrgs = [{ name: 'National Diaper Bank' }]
      const newList = seedOrgs.filter((x) => !existingOrgs.includes(x.name))

      // Inserts seed entries
      return knex('nonprofit_organizations').insert(newList)
    })
}
