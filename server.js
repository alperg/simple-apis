var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', require('./api/customer'));
app.use('/', require('./api/form'));
app.use('/', require('./api/grocery'));

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
