const route = require('express').Router()
const ProjectService = require('../services/project.service')
const CodeOrgService = require('../services/code_organization.service')
const NonprofitService = require('../services/nonprofit_organization.service')
const auth = require('./auth')

route.use('/auth', auth)

route.get('/projects', (req, res) => {
  ProjectService.list(res)
})

route.post('/project', (req, res) => {
  ProjectService.findProject(req.body.id, res)
})

route.post('/project/new', (req, res) => {
  ProjectService.createProject(res, req.body)
})

route.get('/code_orgs', (req, res) => {
  CodeOrgService.list(res)
})

route.post('/code_org/new', (req, res) => {
  CodeOrgService.create(res, req.body)
})

route.get('/nonprofit_orgs', (req, res) => {
  NonprofitService.list(res)
})

route.post('/nonprofit_org/new', (req, res) => {
  NonprofitService.create(res, req.body)
})

module.exports = route
