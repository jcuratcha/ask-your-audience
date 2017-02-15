//
// Client code to demonsrate how to use web API
//

var http = require('http');

//
// Set up options for http request (POST variant)
//
var options = {
    host: 'localhost',
    port: 8080,
    path: '/aya/api/create-polls',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

//
// using the options defined above, request API POST /aya/api/create-polls
//
var req = http.request(options, function(res) {
    res.on('data', function(body) {
        console.log(JSON.parse(body));
    });
});

//
// Body for the POST request in Javascript object form
//
var reqBody = {
    questions : "What should I buy?",
    options : ["apple", "oranges", "both", "none"]
};

req.write(JSON.stringify(reqBody)); // Turn Javascript object to JSON format for data interchange
req.end(); // Signal to send request

//
// Set up options for http request (GET variant)
//
options = {
    host: 'localhost',
    port: 8080,
    path: '/aya/api/get-polls/1', // <-- query for poll with pollID of 1
    method: 'GET'
};

//
// using the options defined above, request API GET /aya/api/get-polls/1
//
req = http.request(options, function(res) {
    res.on('data', function(body) {
        console.log(JSON.parse(body));
    });
});

req.end(); // Signal to send request

//
// Set up options for http request (GET variant)
//
options = {
    host: 'localhost',
    port: 8080,
    path: '/aya/api/get-polls', // <-- query for all polls in database
    method: 'GET'
};

//
// using the options defined above, request API GET /aya/api/get-polls
//
req = http.request(options, function(res) {
    res.on('data', function(body) {
        console.log(JSON.parse(body));
    });
});

req.end(); // Signal to send request