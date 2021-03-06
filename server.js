var express = require('express');

var app = express();

var port = process.env.PORT || 3090;

app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});


app.use(express.static('public'));

app.listen(port, function() {
  console.log("App is listening on port ", port);
});
