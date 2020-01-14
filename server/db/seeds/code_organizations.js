exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('code_organizations')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('code_organizations').insert([
        { name: 'Ruby For Good' },
        { name: 'Code for America' },
        { name: 'Code for DC' }
      ])
    })
}
