const bcrypt = require('bcrypt')
const User = require('../models/user.model')

exports.register = function(req, res, info) {
  return User.query()
    .where({ email: info.email })
    .first()
    .then((user) => {
      if (user) {
        return { error: 'user already exists' }
      }
      bcrypt.genSalt(10, (error, salt) => {
        if (error) return { error }
        bcrypt.hash(info.email, salt, (error, hash) => {
          if (error) return { error }
          info.oauth_token = hash
          return User.query()
            .insert(info)
            .then((user) => {
              req.logIn(user, (err) => {
                if (err) return res.status(500).json({ error: err })
                user.password = null
                return res.status(200).json(user)
              })
            })
        })
      })
    })
}

exports.comparePassword = function(user, candidatePassword, next) {
  bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
    if (err) return next(err)
    next(null, isMatch)
  })
}
