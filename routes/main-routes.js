var express = require('express');
// var router = express.Router();
var MainCtrl = require('./controllers/main-controller.js');
var Auth = require('./controllers/auth-controller.js');

//authentication route
app.put('/', function (req, res, next) {
  res.sendFile('');
});

//1) builder creates initial quote request, sends to lumberyard
app.post('/', function (req, res, next) {
    res.sendFile('File Sent!!');
    console.log('Success!!');
});
//for email:
//"Get Quote" button/onclick to send email...  In Angular?

//2) lumberyard replies back with quote
app.put('/', function (req, res, next) {
    res.sendFile('File Sent!!');
    console.log('Success!!');
});
//for email:
//"Get Quote" button/onclick to send email...  In Angular?

//3) builder either a) confirms that he would like to order
app.put('/', function (req, res, next) {
    res.sendFile('File Sent!!');
    console.log('Success!!');
});
//for email:
//"Get Quote" button/onclick to send email...  In Angular?

//4) or b) replies back with adjustments to be made and requests a 're-quote'
app.put('/', function (req, res, next) {
    res.sendFile('File Sent!!');
    console.log('Success!!');
});
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
