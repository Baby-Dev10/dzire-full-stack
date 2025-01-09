import express from "express";
import { sendResetLink, resetPassword } from "../controllers/authController.js";

const router = express.Router();

router.post("/send-reset-link", sendResetLink);
router.post("/reset-password", resetPassword);

export default router;
