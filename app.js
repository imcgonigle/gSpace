require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');


var passport = require('passport');
var session = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');
var resources = require('./routes/resources');
var projects = require('./routes/projects');
var auths = require('./routes/auth');
var gflow = require('./routes/gflow');
var meetups = require('./routes/meetups');
var collaborate = require('./routes/collaborate');

var app = express();

// hbs.registerHelper('navBarWithLinks', function(path) {
//   var path = window.location.pathname;
//   if (path !== 'static/home') {
//     return <div class="topNavBar">
//       <div class="logoContainer">
//         <img src="../public/images/gSpace.jpg" alt="LOGO" class='logo'/>
//       </div>
//       <div class="navBarLinks">
//         <a href="/resources" class="logout white">Resources</a>
//         <a href="/gFlow" class="logout white">gFlow</a>
//         <a href="/collaborate" class="logout white">Collaborate</a>
//       </div>
//       <div class="chatPicContainer">
//         <img src="../public/images/chatIcon.jpg" alt="CHAT" class='chatButton'/>
//         <img src="../public/images/userImg.jpg" alt="PIC" class='picButton'/>
//       </div>
//     </div>
//   }else{
//
//     }
// });

hbs.registerHelper('dotdotdot', function(str) {
  if (str.length > 400)
    return str.substring(0,400) + '...';
  return str;
});

hbs.registerHelper('shortDate', function(str) {
  var date = str;
  var shorten = date.toString().split(" ");
  return shorten[1]+ ' ' +shorten[2]+ ', ' +shorten[3];
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());


app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false,
  sourceMap: true
}));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/users', users);
app.use('/resources', resources);
app.use('/projects', projects);
app.use('/gflow', gflow);
app.use('/auth', auths);
app.use('/meetups', meetups);
app.use('/collaborate', collaborate);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
