const express = require('express');
const path = require('path');
const db = require('./config/database');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const RideRouter = require('./routes/api/rides');
const UserRouter = require('./routes/api/users');

const app = express();

//testing db connection
// db
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const passport = require('passport');
require('./middleware/auth');

//prevent cors errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Header', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
  if (req.method === "OPTIONS") {
      res.header('Access-Control-Allow-Methods', 'PUT,PATCH,POST,GET,DELETE');
      return res.status(200).json({});
  }
  next();
});


app.use('/api/v1/rides', passport.authenticate('jwt', { session: false }), RideRouter);
app.use('/api/v1/users', UserRouter);


//error hundleling 
app.use((res, req, next) => {
  const error = new Error('Not found');
  res.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
