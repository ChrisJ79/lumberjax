
//main database/model


//require mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//Schema structure
var quoteSchema = mongoose.Schema({
    //CUSTOMER INFO
    customerName : {type : String},
    jobName : {type : String},
    contactName : {type : String},
    contactPhoneNumber : {type : String},
    //get the email from the HTML page....
    //returnEmailAddress === login email adress or 'typed in' email address
    returnEmailAddress : {type : String, default : 'me@something.com'},
    // quoteNumber : {type : Number},
    quoteJobDeliveredTo : {type : String},
    notes : {type : String, required : false},
    //TIMBER/MATERIAL INFO
    species :  {type : String},
    texture :  {type : String},
    moistureContent :  {type : String},
    lineNumber :  {type : Number},
    timberSize :  {type : String},
    // item : {type : String},
    quantity :  {type : Number},
    boardFeet  :  {type : Number},
    inStock : {type : String},
    pricePerBF : {type : Number},
    linePrice : {type : Number},
    subTotal : {type : Number},

});


module.exports = mongoose.model('Quote', quoteSchema, 'quotes');
