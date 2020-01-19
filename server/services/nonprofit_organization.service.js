const NonprofitOrg = require('../models/nonprofit_organization.model')

exports.list = function(res) {
  return NonprofitOrg.query().then((nonprofitOrg) => {
    return res.status(200).json(nonprofitOrg)
  })
}

exports.create = function(res, info) {
  return NonprofitOrg.query()
    .where({ name: info.name })
    .orWhere({ url: info.url })
    .first()
    .then((record) => {
      if (record) {
        return res.status(200).json(record)
      } else {
        return NonprofitOrg.query()
          .insert(info)
          .then((nonprofitOrg) => {
            return res.status(200).json(nonprofitOrg)
          })
      }
    })
}
