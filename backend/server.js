//
// The web server, the controller for web API calls
//

var express = require('express');
var service = require('./service.js');

var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

//
// Middleware used to parse JSON inside request body into a Javascript object
//
app.use(bodyParser.json());
app.set('secret', 'COMP4350');

//
// Add headers to allow CORS to work in Chrome and Firefox
//
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

//
//  Calls the service that creates a poll using the information inside the POST (JSON) body
//
app.post('/aya/api/create-polls', function(req, res) {
    if (process.env.NODE_ENV !== 'test') {
        console.log('/aya/api/create-polls called');
    }
    service.newPoll(req.body.questions, req.body.options, req.ip).then(pollID => res.json({"pollID" : pollID}));
});

//
//  Calls the service that retrieves a poll via pollID
//
app.get('/aya/api/get-polls/:id', function(req, res) {
    if (process.env.NODE_ENV !== 'test') {
        console.log('/aya/api/get-polls/%d called', req.params.id);
    }
    service.getPoll(req.params.id).then(polls => res.json(polls));
});

//
// Calls the service that retrieves all the polls in the database
//
app.get('/aya/api/get-polls', function(req, res) {
    if (process.env.NODE_ENV !== 'test') {
        console.log('/aya/api/get-polls called');
    }
    service.getPolls().then(polls => res.json(polls));
});

//
// Calls the service that finds and modifies the votes of a poll via pollID
//
app.get('/aya/api/vote/:id/:index', function(req, res) {
    if (process.env.NODE_ENV !== 'test') {
        console.log('/aya/api/vote/%d/%d called', req.params.id, req.params.index);
    }
    service.increaseVote(req.params.id, req.params.index).then(polls => res.json(polls));
});

//
// Calls the service that finds and removes a poll via pollID
//
app.delete('/aya/api/remove-poll/:id', function(req, res) {
    if (process.env.NODE_ENV !== 'test') {
        console.log('/aya/api/remove-poll/%d called', req.params.id);
    }
    service.removePoll(req.params.id).then(polls => res.json(polls));
});

//
//  Calls the service that creates a profile using the information inside the POST (JSON) body
//
app.post('/aya/api/register', function(req, res) {
    if (process.env.NODE_ENV !== 'test') {
        console.log('/aya/api/register called');
    }
    service.newProfile(req.body.username, req.body.password, req.body.displayName).then(profileID => res.json({"profileID" : profileID}));
});

//
// Calls the service that authenticates the user's credentials using the information inside the POST (JSON) body
//
app.post('/aya/api/authenticate', function(req, res) {
    if (process.env.NODE_ENV !== 'test') {
        console.log('/aya/api/authenticate called');
    }

    service.authUser(req.body.username, req.body.password)
        .then(function(result) {
            if(result != null) {
                res.json({success : true, profileID : result});
            } else {
                res.json({success : false, message : 'Authentication failed. Incorrect username or password.'});
            }
        });
});

//
//  Calls the service that retrieves a profile via profileID
//
app.get('/aya/api/get-profiles/:id', function(req, res) {
    if (process.env.NODE_ENV !== 'test') {
        console.log('/aya/api/get-profiles/%d called', req.params.id);
    }
    service.getProfile(req.params.id).then(profiles => res.json(profiles));
});

//
// Calls the service that finds and modifies the list of votes for a user with a given profileID
//
app.get('/aya/api/user-vote/:profileID/:pollID', function(req, res) {
    if (process.env.NODE_ENV !== 'test') {
        console.log('/aya/api/user-vote/%d/%d called', req.params.profileID, req.params.pollID);
    }
    service.updateUserVotes(req.params.profileID, req.params.pollID).then(profiles => res.json(profiles));
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
