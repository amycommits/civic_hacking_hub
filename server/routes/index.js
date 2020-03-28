// const route = require('express').Router()
const express = require('express')
const Knex = require('knex')
const { Model } = require('objection')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const passport = require('passport')
const knexConfig = require('../../knexfile')

const app = express()

const ProjectService = require('../services/project.service')
const CodeOrgService = require('../services/code_organization.service')
const NonprofitService = require('../services/nonprofit_organization.service')
const auth = require('./auth')

let knex = {}

if (process.env.NODE_ENV !== 'production') {
  knex = Knex(knexConfig.development)
} else {
  knex = Knex(knexConfig.production)
}

Model.knex(knex)

app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
require('../config/passport/local_strategy.config')(passport)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'reached the api endpoint' })
})

app.use('/auth', auth)

app.get('/projects', (req, res) => {
  ProjectService.list(res)
})

app.post('/project', (req, res) => {
  ProjectService.findProject(req.body.id, res)
})

app.post('/project/new', (req, res) => {
  ProjectService.createProject(res, req.body)
})

app.get('/code_orgs', (req, res) => {
  CodeOrgService.list(res)
})

app.post('/code_org/new', (req, res) => {
  CodeOrgService.create(res, req.body)
})

app.get('/nonprofit_orgs', (req, res) => {
  NonprofitService.list(res)
})

app.post('/nonprofit_org/new', (req, res) => {
  NonprofitService.create(res, req.body)
})

module.exports = {
  path: '/api',
  handler: app
}
