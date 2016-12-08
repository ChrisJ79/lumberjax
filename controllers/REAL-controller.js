// 1) npm install nodemailer
// 2) Cre­at­e a trans­port object in route handler.
var nodemailer = require('nodemailer');
var dotenv = require('dotenv').config();
var fs = require('fs');

module.exports = {
    emailToLumberYard: emailToLumberYard
};

function emailToLumberYard(req, res) {

  console.log("The req body" ,req.body);
  var file = fs.readFileSync(__dirname + '/../public/html/email.html', 'utf8');
  console.log("File contents: ", file);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cjohnsonswp@gmail.com', // Your email id
            pass: ''//process.env.emailPW // Your password
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
    }
});

}

// function emailToBuilder(req, res) {};
