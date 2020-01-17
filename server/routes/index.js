const route = require('express').Router()
const ProjectService = require('../services/project.service')
const auth = require('./auth')

route.use('/auth', auth)

route.get('/projects', (req, res) => {
  ProjectService.list(res)
})

route.post('/project', (req, res) => {
  ProjectService.findProject(req.body.id, res)
})

module.exports = route
