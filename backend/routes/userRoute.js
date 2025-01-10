import express from "express";
import {
  login,
  register,
  admin,
  sendResetLink,
  resetPassword,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/admin", admin);

userRouter.post("/send-reset-link", sendResetLink);
userRouter.post("/reset-password", resetPassword);

export default userRouter;
