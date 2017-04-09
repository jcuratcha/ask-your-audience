//
// Structure of profile object / schema used inside database
//

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var profileSchema = new Schema({
    _id : Number,
    username : { type: String, required: true, unique: true },
    password : String,
    displayName : String,
    votedPolls : [{ type: Number, ref: 'Poll' }]
});

module.exports = mongoose.model('Profile', profileSchema);