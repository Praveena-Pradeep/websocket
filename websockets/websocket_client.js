// Import the 'ws' WebSocket library
const WebSocket = require('ws');

// Create a new WebSocket connection to the server
const socket = new WebSocket('ws://localhost:8080');

// When the connection is established, send a message to the server
socket.onopen = () => {
  console.log('Connected to the server!');
  socket.send('Hello, Server!');
};

// When the server sends a message, log it to the console
socket.onmessage = (event) => {
  console.log(`Message from server: ${event.data}`);
};

// Handle any errors
socket.onerror = (error) => {
  console.log(`WebSocket Error: ${error}`);
};

// Handle when the connection is closed
socket.onclose = () => {
  console.log('Disconnected from the server.');
};

