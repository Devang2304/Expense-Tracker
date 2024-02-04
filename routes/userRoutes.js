import { Router } from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import express from "express";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, (req, res) => {
    res.status(200).json({
        success: true,
        data: req.user
    })
});
export default router;