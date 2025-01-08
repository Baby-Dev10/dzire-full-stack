import express from "express";
import {
  sendResetLink,
  resetPasswordWithLink,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/send-reset-link", sendResetLink);
router.post("/reset-password", resetPasswordWithLink);

export default router;
