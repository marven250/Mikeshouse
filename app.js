const express = require('express');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.status(200).send('Server running 🚀');
});

app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from API' });
});

app.post('/api/data', (req, res) => {
  res.status(201).json({
    success: true,
    data: req.body
  });
});

// 404 handler (important for tests)
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports = app;
