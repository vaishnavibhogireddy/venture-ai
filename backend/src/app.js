const chatRoutes = require("./routes/chatRoutes");
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", chatRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Velora Backend is Running 🚀",
  });
});

module.exports = app;