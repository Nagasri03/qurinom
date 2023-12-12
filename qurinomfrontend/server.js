const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // Update with your actual frontend URL
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.static(path.join(__dirname)));

// Define a route to handle the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Login.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
