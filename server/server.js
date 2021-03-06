require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const routes = require('./routes');
const passport = require('./config/passport');
const corsOptions = require('./config/cors.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
} else {
  app.use(express.static(path.join(__dirname, '../client/public')));
}

// Add routes, API
app.use(routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Dynamically force schema refresh only for 'test'
const FORCE_SCHEMA = process.env.NODE_ENV === 'test'; // eslint-disable-line  no-unused-vars

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/island-guru', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`🌎 Server is Ready and Listening on http://localhost:${PORT}`); // eslint-disable-line no-console
});

module.exports = app;


// /api/users/:id/favorites POST OR PUT

//GET users favorites;
//api/users/:id/favorites
  //return the array from the user of all their favorites


//POST 

// click the button
  //the favoriteId and the user id
    //then you get the user from the db
      //then you push the id of the thing into the users favorites array 
        //then you save the user


//DELETE 
// /api/users/:id/favorites/:favoriteId
//filter the array to remove the id that matches favoriteId