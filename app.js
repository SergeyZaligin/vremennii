const createError = require('http-errors');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const staticAsset = require('static-asset');
const indexRouter = require('./routes/index');
const postRouter = require('./routes/post');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const dotenv = require('dotenv');
const favicon = require('serve-favicon');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

dotenv.config({
  path: path.join(__dirname, '.env')
});

mongoose
  .connect(
    process.env.MONGO_URL, {
      useCreateIndex: true,
      useNewUrlParser: true
    },
  )
  .then(() => {
    console.log('Connection mongodb success!!!');
  })
  .catch(error => console.log(error));

const app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(
  bodyparser.urlencoded({
    extended: true,
  }),
);
app.use(bodyparser.json());
app.use(cookieParser());
app.use(favicon(path.join(__dirname, '/public/images/favicon.ico')));
app.use(staticAsset(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    url: process.env.MONGO_URL
  })
}));

app.use('/', indexRouter);
app.use('/post', postRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    title: 'Ошибка - ',
    meta: {
      description: 'Ошибка',
      keywords: 'Ошибка'
    }
  });
});

module.exports = app;