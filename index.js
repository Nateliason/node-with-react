const express = require('express');
require('./services/passport');

const app = express();

// This is the same as putting the require in a variable then calling that variable. Nifty!
require('./routes/authRoutes')(app);

// This lets Heroku set the Port and uses 5000 as a fallback locally
const PORT = process.env.PORT || 5000;
app.listen(PORT);