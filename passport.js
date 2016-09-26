var passport = require('passport')
var GithubStrategy = require('passport-github2').Strategy

passport.use(new GithubStrategy({
  clientID: process.env.GH_CLIENTID,
  clientSecret: process.env.GH_CLIENTSECRET,
  callbackURL: process.env.GH_CALLBACK
},
  function (accessToken, refreshToken, profile, done) {
    return (null, profile)
  }
))

module.exports = passport;
