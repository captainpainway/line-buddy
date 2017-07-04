const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
var CronJob = require('cron').CronJob;

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'public')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

let data = {};

function getTimes() {
    var parks = require("themeparks");
    var fs = require("fs");

    var MagicKingdom = new parks.Parks.WaltDisneyWorldMagicKingdom();
    var Epcot = new parks.Parks.WaltDisneyWorldEpcot();
    var HollywoodStudios = new parks.Parks.WaltDisneyWorldHollywoodStudios();
    var AnimalKingdom = new parks.Parks.WaltDisneyWorldAnimalKingdom();

    var mk = MagicKingdom.GetWaitTimes().then((times) => {
      data["MagicKingdom"] = times;
    }).catch(err => {
      console.error('Error: ' + err);
    }).then(() => {
      console.log("Magic Kingdom times updated");
    });
    var e = Epcot.GetWaitTimes().then((times) => {
      data["Epcot"] = times;
    }).catch(err => {
      console.error('Error: ' + err);
    }).then(() => {
      console.log("Epcot times updated");
    });
    var hs = HollywoodStudios.GetWaitTimes().then((times) => {
      data["HollywoodStudios"] = times;
    }).catch(err => {
      console.error('Error: ' + err);
    }).then(() => {
      console.log("Hollywood Studios times updated");
    });
    var ak = AnimalKingdom.GetWaitTimes().then((times) => {
      data["AnimalKingdom"] = times;
    }).catch(err => {
      console.error('Error: ' + err);
    }).then(() => {
      console.log("Animal Kingdom times updated");
    });
    Promise.all([mk, e, hs, ak]).then(values => {
      console.log('New Times: ' + new Date().toString());
      io.sockets.emit('times', data);
    });
}

getTimes();

io.on('connection', (socket) => {
  console.log('New Connection');
  socket.emit('times', data);
});

var job = new CronJob('0 */5 * * * *', function() {
    getTimes();
}, null, true, 'America/New_York');
job.start();


http.listen(3000, () => {
  console.log('listening on *:3000');
});