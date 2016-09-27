var passport = require('passport')
var GithubStrategy = require('passport-github2').Strategy
var session = require('express-session')

passport.use(new GithubStrategy({
  clientID: process.env.GH_CLIENTID,
  clientSecret: process.env.GH_CLIENTSECRET,
  callbackURL: process.env.GH_CALLBACK
},
  function (accessToken, refreshToken, profile, done) {
    //console.log(arguments);
    return done(null, profile)
  }
))

passport.serializeUser(function (user, done) {

   done(null, user);

})

passport.deserializeUser(function (user, done) {

done(null, user)

})


module.exports = passport;
