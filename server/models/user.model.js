const { Model } = require('objection')

class User extends Model {
  static tableName = 'users'
  static jsonSchema = {
    type: Object,
    required: ['email'],
    properties: {
      id: { type: 'integer' },
      email: { type: 'string' },
      oauth_token: { type: 'string' },
      password: { type: 'string' }
    }
  }
}
module.exports = User
