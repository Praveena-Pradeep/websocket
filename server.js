// Import the 'ws' WebSocket library
const WebSocket = require('ws');

// Create a WebSocket server that listens on port 8080
const wss = new WebSocket.Server({ port: 8080 });

// When a client connects
wss.on('connection', (ws) => {
  console.log('A new client has connected.');

  // Send a message to the client
  ws.send('Hello from the WebSocket server!');

  // When the server receives a message from the client
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Send the same message back to the client (echo)
    ws.send(`You said: ${message}`);
  });

  // Handle when the client closes the connection
  ws.on('close', () => {
    console.log('Client disconnected.');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
