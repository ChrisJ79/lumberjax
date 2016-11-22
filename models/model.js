
//main database/model


//require mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//Schema structure
var quoteSchema = mongoose.Schema({
    name : {type : String},
    jobName : {type : String},
    contactName : {type : String},
    contactPhoneNumber : {type : String},
    //get the email from the HTML page....
    //returnEmailAddress === login email adress or 'typed in' email address
    returnEmailAddress : {type : String, default : 'me@something.com', required : true},
    // quoteNumber : {type : Number},
    notes : {type : String, required : false},
    // What else needs to go here?

});


module.exports = mongoose.model('Quote', quoteSchema, 'quotes');
