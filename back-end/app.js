const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const { Client, Location } = require('whatsapp-web.js');

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });

    const client = new Client();
    
    client.on('qr', (qr) => {
        // NOTE: This event will not be fired if a session is specified.
        console.log('QR RECEIVED', qr);
        socket.emit("QRCODE", qr);
    });

    client.on('ready', () => {
        socket.emit("CONNECTED","Cliente conectado");
    });
    
    client.on('message', msg => {
        msg.reply('Olá');
    });
    
    client.initialize();
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));