// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";

// dotenv.config();
// const app = express();
// connectDB();

// app.use(express.json());
// app.use(cors());

// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // Import database connection
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// ✅ Enable CORS with specific origin
app.use(cors({ origin: "*" })); // Allow requests from all origins
app.use(express.json());


// ✅ Middleware to parse JSON requests
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Routes
app.use("/api/auth", authRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
