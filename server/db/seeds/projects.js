exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Diaper Base',
          description:
            'A Ruby on Rails application that does warehouse management for diaper banks',
          code_organization_id: knex
            .table('code_organizations')
            .where({ name: 'Ruby For Good' })
            .first()
            .select('id'),
          nonprofit_organization_id: knex
            .table('nonprofit_organizations')
            .where({ name: 'National Diaper Bank' })
            .first()
            .select('id'),
          github_link: 'https://github.com/rubyforgood/diaper',
          setup_link:
            'https://github.com/rubyforgood/diaper/blob/master/installation.md'
        },
        {
          name: 'Partner Base',
          description:
            'A Ruby on Rails application that does organization coordination for diaper banks',
          code_organization_id: knex
            .table('code_organizations')
            .where({ name: 'Ruby For Good' })
            .first()
            .select('id'),
          nonprofit_organization_id: knex
            .table('nonprofit_organizations')
            .where({ name: 'National Diaper Bank' })
            .first()
            .select('id'),
          github_link: 'https://github.com/rubyforgood/partner',
          setup_link:
            'https://github.com/rubyforgood/partner/blob/master/installation.md'
        }
      ])
    })
}
