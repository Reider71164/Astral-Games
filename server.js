// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route that serves index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
