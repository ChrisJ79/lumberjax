
var Model = require('./models/model.js');



// Send info to the database

app.put('/', function (req, res) {
  res.sendFile('File Sent!!');
  console.log('Success!!');
});



// Functionality to send info AS A LINK, in an email to a specified receipient....
