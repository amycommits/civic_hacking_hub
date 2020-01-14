const { Model } = require('objection')

class NonprofitOrganization extends Model {
  static tableName = 'nonprofit_organizations'
  static jsonSchema = {
    type: Object,
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
      description: { type: 'string' }
    }
  }
}
module.exports = NonprofitOrganization
