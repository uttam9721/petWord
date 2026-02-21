
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";

import contactRoute from "./routes/contactRoute.js";
import category from "./routes/category.js";
import pet from "./routes/pet.js";
import adoption from "./routes/adoption.js";
import userRouter from "./routes/user.js";
import addressRouter from "./routes/address.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config(); // ✅ load env variables

// Define __dirname manually for ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// ✅ Allow Vercel frontend later
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use("/public", express.static(path.join(__dirname, "public")));

app.use('/api/address', addressRouter);
app.use('/api/user', userRouter);
app.use("/api/category", category);
app.use("/api/pets", pet);
app.use('/api/adoption', adoption);
app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log("Server running on", PORT);
    });
  })
  .catch((err) => console.log(err));