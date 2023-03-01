const express = require('express');
const app = express();
const PORT = 1234;
// Http module.
const http = require('http');
const server = http.createServer(app);
// Socket module.
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
// });

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
});

server.listen(PORT, () => {
  console.log(`listening on: http://localhost:${PORT}/`);
});
