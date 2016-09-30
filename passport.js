var passport = require('passport')
var GithubStrategy = require('passport-github2').Strategy
var session = require('express-session')
var query = require('./database/queries/users')

passport.use(new GithubStrategy({
  clientID: process.env.GH_CLIENTID,
  clientSecret: process.env.GH_CLIENTSECRET,
  callbackURL: process.env.GH_CALLBACK
},
  function (accessToken, refreshToken, profile, done) {
    query.getUserByID(profile.id)
		.then(function(data) {
			profile.is_admin = data[0].is_admin;
			return done(null, profile);
		})
    .catch(function(err) {
			return next(err);
		})
  }
))

passport.serializeUser(function (user, done) {

   done(null, user);

})

passport.deserializeUser(function (user, done) {

done(null, user)

})


module.exports = passport;
