var passport = require('passport')
var GithubStrategy = require('passport-github2').Strategy

passport.use(new GithubStrategy({
  clientID: process.env.GH_CLIENTID,
  clientSecret: process.env.GH_CLIENTSECRET,
  callbackURL: process.env.GH_CALLBACK
},
  function (accessToken, refreshToken, profile, done) {
    console.log(arguments);
    return (null, profile)
  }
))

passport.serializeUser(function (user, done) {

   done(null, user.id);

})

passport.deserializeUser(function (id) {
  
  User.findById(id, function(err, user) {
  done(err, user);
});

})


module.exports = passport;
