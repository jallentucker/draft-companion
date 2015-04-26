var express = require('express');
var path = require('path');
var pg = require('pg');

var app = express();

app.set('port', (process.env.PORT || 5000));

// app.get('/', function(req, res) {
// 	res.send('Hello World!');
// });

app.get('/db', function(req, res) {
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		client.query('SELECT * FROM test_table', function(err, result) {
			done();
			if (err) {
				console.error(err);
				res.send('Error ' + err);
			} else {
				res.send(result.rows);
			}
		});
	});
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
