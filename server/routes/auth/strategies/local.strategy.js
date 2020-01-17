const route = require('express').Router()
const passport = require('passport')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const User = require('../../../services/user.service')

route.post(
  '/registration',
  [
    check('email')
      .isEmail()
      .normalizeEmail(),
    check('password').isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors })
    }
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(500).json({ error: err })
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) return res.status(500).json({ error: err })
        User.register(req, res, { email: req.body.email, password: hash })
      })
    })
  }
)

route.post('/login', passport.authenticate('local'), (req, res) => {
  req.user.password = undefined
  res.status(200).json(req.user)
})

route.post('/logout', (req, res) => {
  req.logout()
  res.json({ ok: true })
})

module.exports = route
