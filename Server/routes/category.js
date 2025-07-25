
import express from "express";
import { getAll, create, update, remove } from "../controllers/categoryController.js";

const router = express.Router();

// Get All Categories
router.get("/all", getAll);

//Create new Categories
router.post("/create", create);

//update categories
router.put("/update/:id", update);

// delete categories
router.delete("/delete/:id",remove);

export default router;

