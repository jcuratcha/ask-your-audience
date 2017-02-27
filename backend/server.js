//
// The web server, the controller for web API calls
//

var express = require('express');
var service = require('./service.js');

var app = express();
var bodyParser = require('body-parser');

//
// Middleware used to parse JSON inside request body into a Javascript object
//
app.use(bodyParser.json());

//
//  Calls the service that creates a poll using the information inside the POST (JSON) body
//
app.post('/aya/api/create-polls', function(req, res) {
    if (process.env.NODE_ENV !==  'test') {
        console.log('/aya/api/create-polls called');
    }
    service.newPoll(req.body.questions, req.body.options, req.ip).then(pollID => res.json({"pollID" : pollID}));
});

//
//  Calls the service that retrieves a poll via pollID
//
app.get('/aya/api/get-polls/:id', function(req, res) {
    if (process.env.NODE_ENV !==  'test') {
        console.log('/aya/api/get-polls/%d called', req.params.id);
    }
    service.getPoll(req.params.id).then(polls => res.json(polls));
});

//
// Calls the service that retrieves all the polls in the database
//
app.get('/aya/api/get-polls', function(req, res) {
    if (process.env.NODE_ENV !==  'test') {
        console.log('/aya/api/get-polls called');
    }
    service.getPolls().then(polls => res.json(polls));
});

//
// Calls the service that finds and modifies the votes of a poll via pollID
//
app.get('/aya/api/vote/:id/:index', function(req, res) {
    if (process.env.NODE_ENV !==  'test') {
        console.log('/aya/api/vote/%d/%d called', req.params.id, req.params.index);
    }
    service.increaseVote(req.params.id, req.params.index).then(polls => res.json(polls));
});

var port = 8080;

//
// Starts the web server
//
var server = app.listen(port, function() {
    if (process.env.NODE_ENV !==  'test') {
        console.log("Listening to port", port);
    }
});

module.exports = server;