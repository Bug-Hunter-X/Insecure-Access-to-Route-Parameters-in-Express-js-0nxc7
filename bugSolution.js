const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate userId - ensuring it's a positive integer
  if (!/^[0-9]+$/.test(userId) || parseInt(userId) <=0) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  const parsedUserId = parseInt(userId, 10); //Parse to Integer
  // ... further operations using parsedUserId
});