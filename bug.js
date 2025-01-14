const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  // Accessing the ID parameter without proper validation or sanitization
  const userId = req.params.id;
  // ... further operations using userId
});