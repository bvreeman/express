const express = require('express');
const bodyParser = require('body-parser');
require('nodemon');

const app = express();
require('path');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
