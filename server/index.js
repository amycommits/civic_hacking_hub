const express = require('express')
const session = require('express-session') // login persistance
const Knex = require('knex')
const { Model } = require('objection')
const bodyParser = require('body-parser')

const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const passport = require('passport')
const config = require('../nuxt.config.js')
const knexConfig = require('../knexfile.js')
const secrets = require('./config/secrets.json')
// const routes = require('./routes')

config.dev = process.env.NODE_ENV !== 'production'

// importing knex
const knex = Knex(knexConfig.development)
Model.knex(knex)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(
    session({
      secret: secrets.session.password,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  // Set up passport auth
  require('./config/passport/local_strategy.config')(passport)

  // app.use('/', routes)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
