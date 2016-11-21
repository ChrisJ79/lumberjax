
// 1) Import variables from node modules with 'require' method
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var Routes = require('./routes/routes.js');
var Users = require('./routes/users.js');


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

app.use('/', Routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


//Routes
// How do I know whether to include my routes on server.js or routes.js??
// Routes(app);


// Is this all I need to get a response??
// res.send('A response has been sent!!!');



// what about sessions??

// connect to mongoose to mongo db
// mongoose.connect (mongod://localhost/?????);
