var fs = require('fs');
var express = require('express');
var app = express();

const dataset = require('./data/dataset.json');

PORT = 3000

/***
 * index route
 */
fs.readFile('template/index.html', function (err, html) {
    if (err) {
        throw err;
    }
    app.get('/', function (req, res) {
        res.writeHeader(200, {"Content-Type": "text/html"});
        res.write(html);
        res.end();
    });
});

/***
 * dataset route
  */
app.get('/dataset', function (req, res) {
    res.header({"Content-Type": "application/json"});
    res.send(JSON.stringify(dataset));
});

app.listen(PORT, function () {
    console.log('Submarines app running on port [' + PORT + '] \nPress CTRL+C to terminate');
});