// 1) npm install nodemailer
// 2) Cre­at­e a trans­port object in route handler.
var nodemailer = require('nodemailer');
// var wellknown = require('nodemailer-wellknown');
var dotenv = require('dotenv').config();
var fs = require('fs');

// var config = wellknown('Gmail');


module.exports = {
    emailToLumberYard: emailToLumberYard
};

function emailToLumberYard(req, res) {

  console.log("The req body" ,req.body);
  var file = fs.readFileSync(__dirname + '/../public/html/email.html', 'utf8');
  //console.log("File contents: ", file);

  // var smtpTransport = nodemailer.createTransport("SMTP", {
  //   service: "Gmail",
  //   auth: {
  //     XOAuth2: {
  //       user: "cjohnsonswp@gmail.com", // Your gmail address.
  //                                             // Not @developer.gserviceaccount.com
  //       clientId: "242606568864-lfgs8o98gbil7gl99cohcn0itppmtesp.apps.googleusercontent.com",
  //       clientSecret: "PWMsy2DEpvqJ9Y3ZMR_F6FCK",
  //       refreshToken: "qretAxYlSi_LKuSdlapdZHg0jaKyNE5fyyj5xOc6eig"
  //     }
  //   }
  // });

  var smtpTransport = nodemailer.createTransport("SMTP", {
         service: 'Gmail',
         auth: {
             user: 'lumberjax66@gmail.com', // Your email id
             pass: process.env.emailPW// Your password
         },
         debug: true
        //  host: 'smtp.gmail.com',
        //  port: 80,
        //  secure: true

  });
  //smtpTransport.on('log', console.log);




    var mailOptions = {
        from: "lumberjax66@gmail.com", // sender address
        to: "csjohnson79@icloud.com, cjohnsonswp@gmail.com", // list of receivers
        subject: "You Have A New Quote Request!! " +req.body.email, // Subject line
        //text: file //req.body.message,
        html: file
    };

    smtpTransport.sendMail(mailOptions, function(error, info){
        //console.log(process.env.emailPW);
    if(error){
        console.log(error);
        res.send(error);
    }else{
        console.log('Message sent: ' + info.response);
        res.send(info);
    }
        // smtpTransport.close();
});

}

// function emailToBuilder(req, res) {};
