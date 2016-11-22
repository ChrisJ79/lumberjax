var express = require('express');

//step1 -- done
var nodemailer = require('nodemailer');

//step2
var router = express.Router();
app.use('/sayHello', router);
router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello

function handleSayHello(req, res) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'example@gmail.com', // Your email id
            pass: 'password' // Your password
        }
    });

}

//step3
var text = 'Hello world from \n\n' + req.body.name;


//step4
var mailOptions = {
    from: 'example@gmail.com>', // sender address
    to: 'receiver@destination.com', // list of receivers
    subject: 'Email Example', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};


//step5 -- The moment of glory!!  Actually send the email and handle the response.
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    }
});


// Functionality to turn index.html(s) into PDFs??, and put into an email (in a specified email.html, as a link ) to a particular email address....
