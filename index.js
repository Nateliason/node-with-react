const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User'); // need to make the user model before calling it in Passport
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const app = express();

// This is the same as putting the require in a variable then calling that variable. Nifty!
require('./routes/authRoutes')(app);

// This lets Heroku set the Port and uses 5000 as a fallback locally
const PORT = process.env.PORT || 5000;
app.listen(PORT);