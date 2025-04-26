const express = require('express');
const bodyParser = require('body-parser');

// Initialize the Express app
const app = express();

// Set the port for the server to listen on
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mock data: Example user credentials (for demonstration purposes)
let users = [
  {
    email: 'nabinadhk11@gmail.com',
    password: 'password',
    name: 'Nabin Adhikari',
  },
];

// Mock data: Example campaign submissions (for demonstration purposes)
let campaigns = [];

// Routes (endpoints for the API)

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Find the user by email and password
  const user = users.find((user) => user.email === email && user.password === password);
  
  if (user) {
    // If the user is found, send a success response with user data
    res.json({ success: true, user });
  } else {
    // If the user is not found, send a failure response
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/submit-campaign', (req, res) => {
  const { businessName, description, contactInfo } = req.body;
  
  // Add the submitted campaign to the campaigns array
  campaigns.push({ businessName, description, contactInfo });
  
  // Send a success response
  res.json({ success: true, message: 'Campaign submitted for approval' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});