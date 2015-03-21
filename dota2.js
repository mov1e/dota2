var express = require('express');
var app = express();
var port = 7691;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dota2');

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/public/html/index.html');
});

app.get('/public/:folder/:file', function(req, res) {
	res.sendFile(__dirname+'/public/' + req.params.folder + '/' + req.params.file);
});

app.get('/components/:file', function(req, res) {
	res.sendFile(__dirname+'/components/' + req.params.file.replace(".map",""));
});

require(__dirname+'/server/routes.js')(app);

app.listen(port);
console.log("App listening on port " + port); 