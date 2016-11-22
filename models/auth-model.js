
// authentication page in data/model.


//require mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


//Schema structure
var authSchema = mongoose.Schema({
    user : {
        // role : {type : Number, defined as 0 for builder, and 1 for lumberyard.};
        // role : {type : Number, required : true, unique : true},
        name : {type : String, required : true},
        emailAddress : {type : String, default : 'me@something.com', unique : true},
        password : {type : String, required : true},
    },


});


module.exports = mongoose.model('User', authSchema, 'users');
