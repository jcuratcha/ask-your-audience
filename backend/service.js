//
// Implements logic used in the server side
//


var db = require('./db.js');

//
// Helper function that returns null instead of an empty array if no results are found
//
function results(array, name) {
    var object = {};
    object[name] = array;

    return array.length == 0 ? null : object;
}

//
//  Finds the next pollID to use, then saves new poll data to the database
//
exports.newPoll = function(q, o, ip) {
    return db.getPolls({sort : {pollID : "descending"}, limit : 1})
        .then(queryResults => (queryResults.length == 0) ? 1 : queryResults[0].pollID+1)
        .then(id => db.insert(id, q, o, ip).then(poll => poll.pollID));
}

//
// Gets the poll object from the corresponding id given
//
exports.getPoll = function(id) {
    return db.getPolls({criteria : {pollID : id}, limit : 1}).then(polls => results(polls, 'polls'));
}

//
// Gets all poll objects in database
//
exports.getPolls = function() {
    return db.getPolls().then(polls => results(polls, 'polls'));
}

//
// Increases the vote of an option in the poll with pollID
//
exports.increaseVote = function(id,index) {
	var update = {};
	update['votes.' + index] = 1;
    return db.findOneAndUpdate({pollID: id},{$inc: update},{new : true});
}

//
// Remove the poll with pollID
//
exports.removePoll = function(id) {
    return db.findOneAndRemove({pollID: id},{active: false},{new : true});
}

//
//  Checks to see if attempted new username already exists
//  If it does already exist, returns null and does not create a new profile
//  If it does not already exist, finds the next profileID to use, then saves new profile data to the database
//
exports.newProfile = function(user, pass, display) {
    var votes = [];

    return db.getProfiles({sort : {profileID : "descending"}, limit : 1})
        .then(queryResults => (queryResults.length == 0) ? 1 : (db.getProfiles({criteria : {username : user}, limit : 1})
        .then(usernameResult => (usernameResult.length != 0) ? null : queryResults[0].profileID+1)))
        .then(id => id == null ? null : db.createProfile(id, user, pass, display, votes).then(profile => profile.profileID));
}

//
//  Checks to see if the user exists and the password supplied matches the one we have stored
//
exports.authUser = function(user, pass) {
    return db.getProfiles({criteria : {username : user}, limit : 1})
        .then(queryResult => (queryResult.length == 0) ? null : (queryResult[0].password === pass ? queryResult[0].profileID : null));
}

//
// Gets the profile object from the corresponding id given
//
exports.getProfile = function(id) {
    return db.getProfiles({criteria : {profileID : id}, limit : 1, select : 'profileID username displayName votedPolls'}).then(profiles => results(profiles, "profiles"));
}

//
//  Finds the profile with a given id and adds a pollID to their list of votedPolls
//
exports.updateUserVotes = function(id, pollID) {
    return db.findProfileAndUpdate({profileID: id},{$push: {votedPolls: pollID}},{new: true});
}
