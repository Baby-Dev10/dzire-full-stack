import express from "express";
import {
  requestPasswordReset,
  resetPassword,
} from "../controllers/authController.js";

const authRouter = express.Router();
// Request password reset (send email)
authRouter.post("/request-password-reset", requestPasswordReset);
// Reset password
authRouter.post("/reset-password", resetPassword);

export default authRouter;
