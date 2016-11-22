var express = require('express');
// var router = express.Router();
// var MainCtrl = require('../controllers/main-controller.js');
// var Auth = require('../controllers/auth-controller.js');




module.exports = (app) => {


//routing for log-in.html
app.get('/', (req, res) => {
    res.sendFile("log-in.html", {
        root: './public/html'
    });
});

// app.post("/login", Auth.login);
// app.post("/logout", Auth.logout);


//routing for register.html
app.get('/', (req, res) => {
    res.sendFile("register.html", {
        root: './public/html'
    });
});





//routing for index.html
app.get('/', (req, res) => {
    res.sendFile("index.html", {
        root: './public/html'
    });
});


//routing for index-2.html
app.get('/', (req, res) => {
    res.sendFile("index-2.html", {
        root: './public/html'
    });
});


//routing for index-3.html
app.get('/', (req, res) => {
    res.sendFile("index-3.html", {
        root: './public/html'
    });
});


//routing for index-4.html
app.get('/', (req, res) => {
    res.sendFile("index-4.html", {
        root: './public/html'
    });
});


//routing for email.html
app.get('/', (req, res) => {
    res.sendFile("email.html", {
        root: './public/html'
    });
});


//routing for email-2.html
app.get('/', (req, res) => {
    res.sendFile("email-2.html", {
        root: './public/html'
    });
});


//routing for email-3.html
app.get('/', (req, res) => {
    res.sendFile("email-3.html", {
        root: './public/html'
    });
});


//routing for email-4.html
app.get('/', (req, res) => {
    res.sendFile("email-4.html", {
        root: './public/html'
    });
});



};


/*
index.html
1 - post
2 - get, put
3 - get, put
4 - get, put
*/


//1) builder creates initial quote request, sends to lumberyard
// app.post('/', function (req, res, next) {
//     res.send('File Sent!!');
//     console.log('Success!!');
// });
//for email:
//"Get Quote" button/onclick to send email...  In Angular?

//2) lumberyard replies back with quote
// app.put('/', function (req, res, next) {
//     res.sendFile('File Sent!!');
//     console.log('Success!!');
// });
//for email:
//"Get Quote" button/onclick to send email...  In Angular?

//3) builder either a) confirms that he would like to order
// app.put('/', function (req, res, next) {
//     res.sendFile('File Sent!!');
//     console.log('Success!!');
// });
//for email:
//"Get Quote" button/onclick to send email...  In Angular?

//4) or b) replies back with adjustments to be made and requests a 're-quote'
// app.put('/', function (req, res, next) {
//     res.sendFile('File Sent!!');
//     console.log('Success!!');
// });
//for email:
//"Get Quote" button/onclick to send email...  In Angular?



//??
// module.exports = (app) => {
//     app.get('/', controllers.index);
// };


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


//???????
// module.exports = router;

/***********************************************************/


//??
// var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });




//??
// module.exports = router;
