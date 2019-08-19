const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// connect to mongoDB
mongoose.connect(keys.mongoURI);

const app = express();

// Enable cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,   // milliseconds
    keys:[keys.cookieKey]               // for encryption of cookie
  })
);
app.use(passport.initialize());         // Tell passport to use cookies
app.use(passport.session()); 

require('./routes/authRoutes')(app);


// In production Heroku sets the port for us, otherwise we use port 5000 in development
const PORT = process.env.PORT || 5000;
app.listen(PORT);
