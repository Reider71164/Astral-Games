const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root directory
app.use(express.static(__dirname));  // Adjust if your static files are in a different location

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  // Root HTML file
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
