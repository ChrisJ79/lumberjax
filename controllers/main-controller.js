
var express = require('express');
var Quote = require('../models/model.js');


// Send info to the database

module.exports = {
    getQuote: function(req, res) {
        Quote.findOne({_id: req.params.id}, (err, doc) => {
            if(err){
                res.send("Error retrieving quote: " + err);
            } else {
                res.send("Found quote: "+  doc);
            }
        });
    },
    saveQuote: function(req, res) {
        var newQuote = new Quote(req.body);
        newQuote.save(function(err, quote) {
            if(err) {
                res.send("Error saving quote: "+ err);
            } else {
                res.send("Saved quote: "+ quote);
            }
        })
    }
}



// Functionality to send info AS A LINK, in an email to a specified receipient....
