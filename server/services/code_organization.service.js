const CodeOrg = require('../models/code_organization.model')

exports.list = function(res) {
  return CodeOrg.query().then((codeOrg) => {
    return res.status(200).json(codeOrg)
  })
}

exports.create = function(res, info) {
  console.log('made it to create')
  return CodeOrg.query()
    .where({ name: info.name })
    .orWhere({ url: info.url })
    .first()
    .then((record) => {
      if (record) {
        return res.status(200).json(record)
      } else {
        return CodeOrg.query()
          .insert(info)
          .then((codeOrg) => {
            return res.status(200).json(codeOrg)
          })
      }
    })
}
