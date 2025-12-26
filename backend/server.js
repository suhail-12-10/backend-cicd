const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'backend-api' });
});

app.get('/api/message', (req, res) => {
  res.json({ message: process.env.MESSAGE || "Default message" });
});

app.listen(PORT, () => {
  console.log(`Backend API listening on port ${PORT}`);
});
