//
// Structure of profile object / schema used inside database
//

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var profileSchema = new Schema({
    profileID : Number,
    username : { type: String, unique: true },
    password : String,
    displayName : String,
    votedPolls : [Number]
});

module.exports = mongoose.model('Profile', profileSchema);