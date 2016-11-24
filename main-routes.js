var express = require('express');
var Auth = require('./controllers/auth');
var MainCtrl = require('./controllers/main-controller.js');
// var Auth = require('../controllers/auth-controller.js');
var Mail  = require('./controllers/email-controller.js');


module.exports = (app) => {


app.post('/emailToLumberYard', Mail.emailToLumberYard);

//routing for log-in.html
app.get('/login', (req, res) => {
    res.sendFile("auth.html", {
        root: './public/html'
    });
});
app.get('/register', (req, res) => {
    res.sendFile("auth.html", {
        root: './public/html'
    });
});

// app.get('/auth', (req, res) => {
//     res.sendFile("auth.html", {
//         root: './public/html'
//     });
// });

// app.post("/login", Auth.login);
// app.post("/logout", Auth.logout);
app.get('/logout', Auth.logout); // route for logging out
app.post('/login', Auth.login); // form request emdpoint for loggin in
app.post('/register', Auth.register); // form request endpoint for user registration


//routing for register.html
// app.get('/register', (req, res) => {
//     res.sendFile("register.html", {
//         root: './public/html'
//     });
// });


//Log-In Page
app.get('/', (req, res) => {
    res.sendFile("auth.html", {
        root: './public/html'
    });
});

//Everything below this line is protected:
app.all('/index*', Auth.session);


app.get('/index', (req, res) => {
    res.sendFile("index.html", {
        root: './public/html'
    });
});
//routing for index-2.html
app.get('/index2', (req, res) => {
    res.sendFile("index-2.html", {
        root: './public/html'
    });
});


//routing for index-3.html
app.get('/index3', (req, res) => {
    res.sendFile("index-3.html", {
        root: './public/html'
    });
});


//routing for index-4.html
app.get('/index4', (req, res) => {
    res.sendFile("index-4.html", {
        root: './public/html'
    });
});

app.all('/email*', Auth.session);
//routing for email.html
app.get('/email', (req, res) => {
    res.sendFile("email.html", {
        root: './public/html'
    });
});


//routing for email-2.html
app.get('/email2', (req, res) => {
    res.sendFile("email-2.html", {
        root: './public/html'
    });
});


//routing for email-3.html
app.get('/email3', (req, res) => {
    res.sendFile("email-3.html", {
        root: './public/html'
    });
});


//routing for email-4.html
app.get('/email4', (req, res) => {
    res.sendFile("email-4.html", {
        root: './public/html'
    });
});

app.get('/quotes/:id', MainCtrl.getQuote);
app.post('/quotes', MainCtrl.saveQuote);

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
