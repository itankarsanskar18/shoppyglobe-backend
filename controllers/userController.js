// controllers/userController.js
const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Ensure the path is correct

// Register a new user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({ name, email, password }); // No hashing here
  res.status(201).json({ message: "User registered", user: { name, email } });
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Login successful", token });
};

module.exports = {
  registerUser,
  loginUser,
};

