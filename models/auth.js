
// authentication page in data/model.


//require mongoose
var mongoose = require('mongoose');

//Schema structure
var authSchema = mongoose.Schema({
    user : {
        role : {type : Number, required : true},
        name : {type : String, required : true},
        emailAddress : {type : String, default : 'me@something.com'},
        password : {type : String, required : true},
    },


    // role : {type : Number, required : true (0,1)};

    // What else needs to go here?

});


//??
module.exports = mongoose.model('???', authSchema, '???');
