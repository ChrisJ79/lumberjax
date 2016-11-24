var nodemailer = require('nodemailer');
var dotenv = require('dotenv').config();
var fs = require('fs');

module.exports = {
    emailToLumberYard: emailToLumberYard
}

function emailToLumberYard(req, res) {

  console.log("The req body" ,req.body)
  var file = fs.readFileSync(__dirname + '/../public/html/email.html', 'utf8');
  console.log("File contents: ", file);

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'cjohnsonswp@gmail.com', // Your email id
            pass: 'scanning'//process.env.emailPW // Your password
        }
    });

    var mailOptions = {
        from: req.body.email, // sender address
        to: 'csjohnson79@icloud.com', // list of receivers
        subject: 'You Have A New Quote Request!! ' +req.body.email, // Subject line
        //text: file //req.body.message,
        html: file
    };

    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});

}

// function emailToBuilder(req, res) {};










// var express = require('express');
//
// //step1 -- done
// var nodemailer = require('nodemailer');
// var dotenv = require('dotenv').config();
//
// //step2
// var router = express.Router();
// app.use('/sayHello', router);
// router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello (Site Needs to be deployed first??)
//
// function handleSayHello(req, res) {
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'cjohnsonswp@gmail.com', // Your email id
//             pass: process.env.timberPW // Your password (Email password)
//         }
//     });
//
// }

//step3
// var text = 'Hello world from Chris!' + req.body.name;


//step4
// var mailOptions = {
//     from: 'cjohnsonswp@gmail.com', // sender address
//     to: 'csjohnson79@icloud.com', // list of receivers
//     subject: 'You have a new email...  A new LumberJax quote awaits!', // Subject line
//     text: text //, // plaintext body
//     // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
// };


//step5 -- The moment of glory!!  Actually send the email and handle the response.
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         console.log(error);
//         res.json({yo: 'error'});
//     }else{
//         console.log('Message sent: ' + info.response);
//         res.json({yo: info.response});
//     }
// });


// Functionality to turn index.html(s) into PDFs??, and put into an email (in a specified email.html, as a link ) to a particular email address....
