const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());


// Home / Backend Test
app.get("/", (req, res) => {
  res.send("Backend is working!");
});


// Login API
app.post("/api/login", (req, res) => {

  const { email, password } = req.body;

  console.log("Login request received:");
  console.log("Email:", email);
  console.log("Password:", password);

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  res.json({
    message: "Login request received successfully!",
  });
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});