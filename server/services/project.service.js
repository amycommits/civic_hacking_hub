const Project = require('../models/projects.model')

exports.list = function(res) {
  return Project.query().then((projects) => {
    return res.status(200).json({ projects })
  })
}

exports.findProject = function(id, res) {
  return Project.query()
    .where({ id })
    .first()
    .then((project) => {
      return res.status(200).json({ project })
    })
}
