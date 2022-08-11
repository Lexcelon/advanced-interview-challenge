require('custom-env').env(true, './config');
const express = require('express');
const api = require('./routes/index');
const cors = require('cors');
const app = express();
const port = 8000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.json());

// Load all of our models
require('./models');

app.listen(port, () => {
  console.log('Interview Challenge Server running on port ' + port);
});

app.use(cors({ origin: true, credentials: true }));

// Initial route
app.use('/api', api);
