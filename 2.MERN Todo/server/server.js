const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());          // Allow frontend requests
app.use(express.json());  // Parse JSON request body

// Connect to MongoDB
mongoose.connect("YOUR_MONGODB_URI_HERE", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

// Routes
app.use("/tasks", require("./routes/tasks"));

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));