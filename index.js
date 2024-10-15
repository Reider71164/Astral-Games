const express = require('express');
const path = require('path');
const app = express();

// Serve static files from a 'public' directory
app.use(express.static('public'));

// Add a route for your main page or proxy logic
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // assuming you have an index.html in a 'public' folder
});

// Listen on the port provided by Koyeb, or default to 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
