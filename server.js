const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Node.js server is running 🚀');
});

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// POST example
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({
    status: 'success',
    received: data
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});



module.exports = app;