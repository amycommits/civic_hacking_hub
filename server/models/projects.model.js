const { Model } = require('objection')

class Project extends Model {
  static tableName = 'projects'
  static jsonSchema = {
    type: Object,
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' }
    }
  }
}
module.exports = Project
