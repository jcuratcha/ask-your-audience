//
// The database access model that interacts with the database
//

var mongoose = require('mongoose');

// use bluebird Promises
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/aya');

var Poll = require('./poll.js');
var Profile = require('./profile.js');

//
// Inserts poll object into the database
//
//  id : the id assigned to the poll
//   q : the question of the poll
//   o : the response options
//  ip : the ip address of the user who created the poll
//
exports.insert = function(id, q, o, ip) {
    return new Poll({pollID : id, question : q, options : o, votes : new Array(o.length).fill(0), owner : ip, active : true}).save();
}

//
// Generic function for retrieving poll data from database
//
// options : JavaScript object
//      criteria : conditions to narrow search
//          sort : sort the search results
//         limit : limit number of results received
//
exports.getPolls = function(options) {
    var query = Poll.find();

    if (options !== undefined) {
        if (options.criteria !== undefined) {
            query = Poll.find(options.criteria);
        }

        if (options.sort !== undefined) {
            query = query.sort(options.sort);
        }

        if (options.limit !== undefined) {
            query = query.limit(options.limit);
        }
    }

    return query.exec();
}

//
// Generic function for finding and updating the vote of a poll from the database
//
// conditions : JavaScript object
//      pollID : where pollID is id
//
// update : JavaScript object, the update that we want to make
//      vote: the change in the vote
//
// options : JavaScript object
//      new : bool - return the modified document rather than the original
exports.findOneAndUpdate = function(conditions, update, options) {
    return Poll.findOneAndUpdate(conditions, update, options).exec();
};

//
// Generic function for finding and removing a poll from the database
//
// conditions : JavaScript object
//      pollID : where pollID is id
//
// update : JavaScript object, the update that we want to make
//      active: the change in active status
//
// options : JavaScript object
//      new : bool - return the modified document rather than the original
exports.findOneAndRemove = function(conditions, update, options) {
    return Poll.findOneAndUpdate(conditions, update, options).exec();
};

//
// Inserts profile object into the database
//
//       id : the id assigned to the profile
//     user : a unique username selected by the user
//     pass : the password chosen by the user
//  display : the display name selected by the user
//    votes : the array of all polls this user has voted on
//
exports.createProfile = function(id, user, pass, display, votes) {
    return new Profile({profileID : id, username : user, password : pass, displayName : display, votedPolls : votes}).save();
}

//
// Generic function for retrieving profile data from database
//
// options : JavaScript object
//      criteria : conditions to narrow search
//          sort : sort the search results
//         limit : limit number of results received
//
exports.getProfiles = function(options) {
    var query = Profile.find();

    if (options !== undefined) {
        if (options.criteria !== undefined) {
            query = Profile.find(options.criteria);
        }

        if (options.sort !== undefined) {
            query = query.sort(options.sort);
        }

        if (options.limit !== undefined) {
            query = query.limit(options.limit);
        }

        if (options.select !== undefined) {
            query = query.select(options.select);
        }
    }

    return query.exec();
}

//
// Generic function for finding and updating the list of polls for a given profile
//
// conditions : JavaScript object
//      profileID : where profileID is id
//
// update : JavaScript object, the update that we want to make
//      pollID: the poll that the user voted on
//
// options : JavaScript object
//      new : bool - return the modified document rather than the original
exports.findProfileAndUpdate = function(conditions, update, options) {
    return Profile.findOneAndUpdate(conditions, update, options).exec();
};
