/*
 * Purpose : This page is for adding Express,connections, routes
 * Devlopers : Sethu, Neha, Saiteja
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const fs = require('fs');


// route path
var apiAuthRoute = require('./routes/authentication/auth.routes');
var employeeRoute = require('./routes/employee/employee.routes');
var employerRoute = require('./routes/employer/employer.routes');
var searchRoute = require('./routes/search/search.routes');




var app = express();

// app.use(logger('common', {
//   stream: fs.createWriteStream('./access.log', {flags: 'a'})
// }));
// app.use(logger('dev'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());



app.use('/auth',apiAuthRoute)
app.use('/employee',employeeRoute)
app.use('/employer',employerRoute)
app.use('/search', searchRoute)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


// model.sequelize.sync().then(() => {
//   app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
//   });
// })

module.exports = app;
