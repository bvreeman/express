const express = require('express');
const bodyParser = require('body-parser');
require('nodemon');

const app = express();
require('path');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

const apiRoutes = require('./app/routing/apiRoutes.js')(app);
// const htmlRoutes = require('./app/routing/htmlRoutes.js')(app);

// app.use('/', htmlRoutes);
app.use('/', apiRoutes);

app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
