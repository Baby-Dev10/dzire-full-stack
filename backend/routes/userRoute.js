import express from "express";
import {
  login,
  admin,
  sendResetLink,
  resetPassword,
  logout,
  signup,
} from "../controllers/userController.js";
//import authUser from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/admin", admin);

userRouter.post("/logout", logout);

userRouter.post("/send-reset-link", sendResetLink);
userRouter.post("/reset-password/:token", resetPassword);

// userRouter.get("/profile", authUser, getUserProfile);
// userRouter.get("/addresses", authUser, getAddresses);
// userRouter.post("/addresses", authUser, addAddress);
// userRouter.delete("/addresses/:id", authUser, deleteAddress);

export default userRouter;
