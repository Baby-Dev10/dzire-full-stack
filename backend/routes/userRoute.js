import express from "express";
import {
  login,
  register,
  admin,
  logout,
  sendVerifyOtp,
  verifyEmail,
  isAuthenticated,
  sendResetOtp,
  resetPassword,
} from "../controllers/userController.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/send-verify-otp", authUser, sendVerifyOtp);
userRouter.post("/verify-account", authUser, verifyEmail);
userRouter.post("/is-auth", authUser, isAuthenticated);
userRouter.post("/send-reset-otp", sendResetOtp);
userRouter.post("/reset-password", resetPassword);
userRouter.post("/admin", admin);

export default userRouter;
