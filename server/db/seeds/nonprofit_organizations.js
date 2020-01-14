exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nonprofit_organizations')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('nonprofit_organizations').insert([
        { name: 'National Diaper Bank' }
      ])
    })
}
