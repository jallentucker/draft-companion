var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.use(express.static(path.join(__dirname, 'html')));

// var server = app.listen(3000, function() {
// 	var host = server.address().address;
// 	var port = server.address().port;

// 	console.log('Example app listening at http://%s:%s', host, port);
// });

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
