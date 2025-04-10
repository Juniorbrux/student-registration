require('dotenv').config();
const express = require('express');
const studentRoutes = require('./src/routes/registerRoutes');
const authRoutes= require('./src/routes/authRoutes')
// const picRoutes = require('./src/routes/uploadRoutes');
const classRoutes = require('./src/routes/classRoutes');
const bodyParser = require('body-parser');
const session = require("express-session");
// Import other route files as needed

const app = express();
const cors = require('cors'); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's origin
  }));
app.use('/api/students', studentRoutes);
app.use('/api/auth', authRoutes); 
// app.use('/api/classes', classRoutes);

// Use other routes as needed

app.use(session({
  secret: "10", // Change to a strong secret
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,  // Prevents JavaScript access to cookies (XSS protection)
    secure: false,   // Set to true if using HTTPS (change this in production)
    sameSite: "lax", // Prevents CSRF attacks, change to 'strict' if needed
    maxAge: 2000 // Session expires in 2second
  }
}));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
module.exports = app;
