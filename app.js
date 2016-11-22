
// 1) Import variables from node modules with 'require' method
var express = require('express');
var path = require('path');
var bcryptjs = require('bcryptjs');
var sessions = require('client-sessions');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Routes = require('./routes/main-routes.js');
var PORT = process.env.PORT || 3000;


// 2) Create an variable that will Express to set up Middleware
var app = express();

// 3) Define the port to run on
app.set('port', 3001);

// 4) Configure the app to listen on Port 3000
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('You, sir, are getting served on port: ' + port);
});


// MIDDLEWARE

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(sessions({
  cookieName: 'quote-session', // cookie name dictates the key name added to the request object
  secret: 'no16u3ssth15', // encryption password (long unguessable string )
  duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
  cookie: {
    ephemeral: false,
    httpOnly: true,
    secure: false
}
}));

app.use('/', Routes);
app.use('/users', Users);

//Connect with Mongoose
mongoose.connect('mongodb://localhost/lumberjax');


Routes(app);



// ROOT ROUTE
app.get('/', function(req, res) {
    res.send("index.html", { root: './public/html' });
});

module.exports = app;


app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};


  // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
