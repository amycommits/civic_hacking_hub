const LocalStrategy = require('passport-local').Strategy

const User = require('../../models/user.model')
const UserService = require('../../services/user.service')

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
   return User.query().findById(id, (err, user) => {
      done(err, user)
    })
  })

  passport.use(new LocalStrategy(
    { usernameField: 'email' },
    (email, password, done) => {
      return User.query().findOne({email: email}).then((user) => {
        if (!user) return done(null, false, { message: 'No such user' })
        UserService.comparePassword(user, password, (err, isMatch) => {
          if (err) return done(err)
          if (!isMatch) return done(null, false, { message: 'Incorrect password' })
          done(null, user)
        })
      })
    }
  ))
}
