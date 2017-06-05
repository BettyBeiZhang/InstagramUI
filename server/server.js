var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var moment = require('moment');

var app = express();

//app.use('/', express.static(path.join(__dirname, '../client/login')));
app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/modules', express.static(path.join(__dirname, '../node_modules')));


app.post('/user', function(req, res) {
  res.send(req.user);

});








var port = process.env.PORT || 8000;
app.listen(port);
console.log('Listening on port ' + port + '...');
