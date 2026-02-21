// routes/contactRoutes.js
import express from "express";
import { handleContact } from "../controllers/contact.js"; // Make sure the filename matches

const router = express.Router();

// POST /api/contact
router.post("/adoption", handleContact);

export default router;
