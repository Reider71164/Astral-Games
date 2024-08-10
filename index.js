const express = require('express');
const path = require('path');
const app = express();

// Serve the public folder directly at the root
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
