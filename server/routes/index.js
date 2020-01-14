const route = require('express').Router()
const ProjectService = require('../services/project.service')
// const auth = require('./auth')

// route.use('/auth', auth)

route.get('/start', (req, res) => {
  res.status(200).json({ message: 'maybe start?' })
})

route.get('/projects', (req, res) => {
  ProjectService.list(res)
})

module.exports = route
