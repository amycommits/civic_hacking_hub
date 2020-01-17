const route = require('express').Router()
const local = require('./strategies/local.strategy')

route.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to the index of auth!' })
})

route.use('/local', local)

module.exports = route
