const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname,'../public');

var express = require('express');


const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));
io.on('connection',(socket) => {
  console.log('New user connected');

  socket.on('disconnect',() =>{
      console.log('user disconnected');
  });
});
server.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app}
