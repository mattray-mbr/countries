// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var countriesCtrl = require('./controllers/countriesCtrl.js');

// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/earth');
//db name is earth collection name is countries


// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});


//pulls in the controllers functions for concise code in this file
app.get('/countries', countriesCtrl.getCountries)

app.post('/search', countriesCtrl.searchCountries)

app.post('/visited', countriesCtrl.visitCountry)






// Creating Server and Listening for Connections \\
var port = 3100
app.listen(port, function(){
  console.log('Server running on port ' + port);

})