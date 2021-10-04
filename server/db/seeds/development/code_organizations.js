exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('code_organizations')
    .select('name')
    .then(function(existingOrgs) {
      // Inserts seed entries
      existingOrgs = existingOrgs.map((x) => x.name)
      const seedOrgs = [
        {
          name: 'Ruby For Good',
          url: 'https://rubyforgood.org/',
          description: 'Deliver specialized software development solutions to nonprofit ' +
            'organizations to bolster their critical missions, build an inclusive technology community, ' +
            'and provide technology-focused educational opportunities to underserved communities.'
        },
        {
          name: 'Code for America',
          url: 'https://www.codeforamerica.org/',
          description: 'Code for America is a non-partisan, non-political 501 organization founded ' +
            'in 2009 to address the widening gap between the public and private sectors in their ' +
            'effective use of technology and design.'
        },
        {
          name: 'Code for DC',
          url: 'https://codefordc.org/',
          description: 'Non-partisan, non-political group of volunteer civic hackers working ' +
            'together to solve local issues and help people engage with the city.'
        }
      ]
      const newOrgs = seedOrgs.filter((x) => !existingOrgs.includes(x.name))
      return knex('code_organizations').insert(newOrgs)
    })
}
