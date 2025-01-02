const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors"); // Add CORS

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

app.use(cors({
  origin: "http://localhost:3000", // URL of your frontend
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// User Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Serve React build files
app.use(express.static(path.join(__dirname, "../batch-02/build")));

// Catch-all route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../batch-02/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
