const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp', function (req, res) {
  res.send(getTimeData());
})

app.get("/api/timestamp/:date_string", function (req, res) {
  const date_string = req.params.date_string;
  res.send(getTimeData(date_string));
})

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

function getTimeData (date) {
  const isInteger = /^\d+$/.test(date);
  if (isInteger) date = parseInt(date);
  date = date ? new Date(date) : new Date();
  if (date.toString() === 'Invalid Date') {
    return {error: 'Invalid Date'}
  }
  return {
    unix: date.getTime(),
    utc: date.toUTCString()
  };
}