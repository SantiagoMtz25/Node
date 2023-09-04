// Dependencias
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET; // Replace with your actual secret key

// Simulated user database (for demonstration purposes)
const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

// Login route
app.post("/login", (req, res) => {
  //const username = "user1";
  //const password = "password1"
  //console.log(req.body)
  const { username, password } = req.body;

  // Simulate user authentication
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Create a JWT token
  const token = jwt.sign({ user: user.id }, process.env.SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

module.exports = app;
