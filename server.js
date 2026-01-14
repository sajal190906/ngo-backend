console.log("FILE LOADED");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/protected", require("./routes/protectedRoutes"));
app.use("/api/volunteer", require("./routes/volunteerRoutes"));
app.use("/api/ngos", require("./routes/ngoRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/leaderboard", require("./routes/leaderboardRoutes"));

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

mongoose.connect("mongodb://127.0.0.1:27017/ngo_connect")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo error:", err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
