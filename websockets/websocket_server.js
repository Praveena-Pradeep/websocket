// server.js
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('A new client connected!');
  
  ws.on('message', (message) => {
    console.log('received: %s', message);
  });

  ws.send('Hello, Client!');
});

console.log('WebSocket server running on ws://localhost:8080');

