//
// The database access model that interacts with the database
//

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/aya');

var Schema = mongoose.Schema;

//
// Structure of poll object / schema used inside database
//
var pollSchema = new Schema({
    pollID : Number,
    question : String,
    options : [String],
    votes : [Number],
    owner : String
});

var Poll = mongoose.model('Poll', pollSchema);

//
// Inserts poll object into the database
//
//  id : the id assigned to the poll
//   q : the question of the poll
//   o : the response options
//  ip : the ip address of the user who created the poll 
//
exports.insert = function(id, q, o, ip) {
    return new Poll({pollID : id, question : q, options : o, votes : new Array(o.length).fill(0), owner : ip}).save();
}

//
// Generic function for retrieving poll data from database
//
// options : JSON 
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
