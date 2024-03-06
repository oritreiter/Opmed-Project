const express = require('express')
const app = express()

let counter = 0;

app.get('/', function (req, res) {
  counter += 1;
  res.send('Hello World!. Visitors count so far: ' + counter);
});

app.listen(3010, function () {
  console.log('Example app listening on port 3010!');
});