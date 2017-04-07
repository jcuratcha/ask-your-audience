var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/../')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'/index.html'))
})

var port = 3000;

app.listen(port, function() {
    console.log("Listening to port", port);
});