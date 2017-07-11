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

// Let's cache the data out here so we're not constantly hitting the API.
// let data = {};

// // Use the cool themeparks API to fetch our data.
// function getTimes() {
//     var parks = require("themeparks");

//     var MagicKingdom = new parks.Parks.WaltDisneyWorldMagicKingdom();
//     var Epcot = new parks.Parks.WaltDisneyWorldEpcot();
//     var HollywoodStudios = new parks.Parks.WaltDisneyWorldHollywoodStudios();
//     var AnimalKingdom = new parks.Parks.WaltDisneyWorldAnimalKingdom();

//     // Fetch Magic Kingdom wait times with a promise.
//     var mk = MagicKingdom.GetWaitTimes().then((times) => {
//       data["MagicKingdom"] = times;
//     }).catch(err => {
//       console.error('Error: ' + err);
//     }).then(() => {
//       console.log("Magic Kingdom times updated");
//     });

//     // Fetch Epcot wait times with a promise.
//     var e = Epcot.GetWaitTimes().then((times) => {
//       data["Epcot"] = times;
//     }).catch(err => {
//       console.error('Error: ' + err);
//     }).then(() => {
//       console.log("Epcot times updated");
//     });

//     // Fetch Hollywood Studios wait times with a promise.
//     var hs = HollywoodStudios.GetWaitTimes().then((times) => {
//       data["HollywoodStudios"] = times;
//     }).catch(err => {
//       console.error('Error: ' + err);
//     }).then(() => {
//       console.log("Hollywood Studios times updated");
//     });

//     // Fetch Animal Kingdom wait times with a promise.
//     var ak = AnimalKingdom.GetWaitTimes().then((times) => {
//       data["AnimalKingdom"] = times;
//     }).catch(err => {
//       console.error('Error: ' + err);
//     }).then(() => {
//       console.log("Animal Kingdom times updated");
//     });

//     // When all of the promises have resolved, emit the data with sockets.
//     Promise.all([mk, e, hs, ak]).then(values => {
//       console.log('New Times: ' + new Date().toString());
//       io.sockets.emit('times', data);
//     });
// }
// getTimes();

// // Every time there's a new connection, send the most recent data.
// io.on('connection', (socket) => {
//   socket.emit('times', data);
// });

// // Let's check for new wait times every five minutes, on the fives.
// var job = new CronJob('0 */5 * * * *', function() {
//     getTimes();
// }, null, true, 'America/New_York');
// job.start();


// Listen on port 3000.
http.listen(3000, () => {
  console.log('listening on *:3000');
});