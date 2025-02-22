const express = require('express');  // Import express framework
const app = express();               // Create an express application

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');         // Send a response when accessing "/"
});

const PORT = process.env.PORT || 3001;  // Define the port (default is 3000)
app.listen(4000, '0.0.0.0', () => console.log(`Server running on port 4000`));  // Start the server
