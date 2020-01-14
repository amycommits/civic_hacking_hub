const { Model } = require('objection')

class CodeOrganization extends Model {
  static tableName = 'code_organizations'
  static jsonSchema = {
    type: Object,
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
      description: { type: 'string' }
    }
  }
}
module.exports = CodeOrganization
