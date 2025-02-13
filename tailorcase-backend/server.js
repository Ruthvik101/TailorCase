// // // import express from 'express';
// // // import dotenv from 'dotenv';
// // // import cors from 'cors';
// // // import connectDB from './config/db.js';
// // // import authRoutes from './routes/authRoutes.js';
// // // import orderRoutes from './routes/orderRoutes.js';
// // // import bookingRoutes from './routes/bookingRoutes.js';

// // // dotenv.config();
// // // connectDB();

// // // const app = express();
// // // app.use(cors());
// // // app.use(express.json());

// // // app.use('/api/auth', authRoutes);
// // // app.use('/api/orders', orderRoutes);
// // // app.use('/api/bookings', bookingRoutes);

// // // app.listen(5000, () => console.log('Server running on port 5000'));

// // import express from "express";
// // import mongoose from "mongoose";
// // import dotenv from "dotenv";
// // import cors from "cors";
// // import authRoutes from "./routes/authRoutes.js";

// // dotenv.config();

// // const app = express();

// // // Middleware
// // app.use(express.json()); // For JSON parsing
// // app.use(cors()); // Enable CORS

// // // Routes
// // app.use("/api/auth", authRoutes);

// // // MongoDB Connection
// // mongoose.connect(process.env.MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// //   .then(() => console.log("MongoDB Connected"))
// //   .catch((err) => console.error("MongoDB Connection Error:", err));

// // // Start Server
// // const PORT = process.env.PORT || 5001;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "./models/User.js"; // Ensure this exists

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// // Signup Route
// app.post("/api/auth/signup", async (req, res) => {
//   const { name, email, password } = req.body;
  
//   if (!name || !email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return res.status(400).json({ message: "User already exists" });
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new User({ name, email, password: hashedPassword });

//   try {
//     await newUser.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Signup failed" });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"; // Ensure this route exists

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request body
app.use(cors()); // Enable CORS

// Logging Middleware (For Debugging)
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

// Routes
app.use("/api/auth", authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    // Start Server Only After DB Connection
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1); // Exit process on DB connection failure
  });
