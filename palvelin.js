var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/*app.get('/', function (req, res) {
	res.send('Hello node with Express');
})*/

var parser = bodyParser.urlencoded({ extended: false });

app.use(express.static('files'));


var server = app.listen(3000, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("Now listening at http://%s:%s", host, port)
})
