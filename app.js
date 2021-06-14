const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('dotenv').config();
const mongoose = require('mongoose');
const url= `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.5vxlk.mongodb.net/${process.env.DATABASENAME}?retryWrites=true&w=majority` 

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bookRouter = require('./routes/book');
const genreRouter = require('./routes/genre');
const bookInstanceRouter = require('./routes/bookInstance');
const authorRouter = require('./routes/author');
const catalogRouter = require('./routes/catalog');

const app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter, bookRouter, bookInstanceRouter, authorRouter, genreRouter);



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

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true}).then(() => {
  console.log('Connected')
}).catch(err => console.log('Error connecting', err))
const db = mongoose.connection


module.exports = app;

