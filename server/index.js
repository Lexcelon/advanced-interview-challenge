require('custom-env').env(true, './config');
const express = require('express');
const api = require('./routes/index');
const cors = require('cors');
const app = express();
const port = 8000;

//load all of our models
require('./models');

app.listen(port, () => {
  console.log('Interview Challenge Server running on port ' + port);
});

app.use(cors({ origin: true, credentials: true }));

// Initial route
app.use('/api', api);