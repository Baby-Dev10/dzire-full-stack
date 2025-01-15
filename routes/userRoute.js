import express from "express";
import {
  login,
  admin,
  sendResetLink,
  resetPassword,
  logout,
  signup,
  checkAuth,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";
//import authUser from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/admin", admin);

userRouter.get("/check-auth", verifyToken, checkAuth);

userRouter.post("/logout", logout);

userRouter.post("/send-reset-link", sendResetLink);
userRouter.post("/reset-password", resetPassword);

// userRouter.get("/profile", authUser, getUserProfile);
// userRouter.get("/addresses", authUser, getAddresses);
// userRouter.post("/addresses", authUser, addAddress);
// userRouter.delete("/addresses/:id", authUser, deleteAddress);

export default userRouter;
