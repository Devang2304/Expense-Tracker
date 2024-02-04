import { Router } from "express";
import express from "express";
import {addTransection, getAllTransection, editTransection, deleteTransection} from "../controllers/transectionController.js";
import { protect } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();


router.post("/add-transection", addTransection);
router.post("/edit-transection", editTransection);
router.post("/delete-transection", deleteTransection);

router.post("/get-transection", getAllTransection);

export default router