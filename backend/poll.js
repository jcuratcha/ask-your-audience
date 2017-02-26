//
// Structure of poll object / schema used inside database
//

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var pollSchema = new Schema({
    pollID : Number,
    question : String,
    options : [String],
    votes : [Number],
    owner : String
});

module.exports = mongoose.model('Poll', pollSchema);