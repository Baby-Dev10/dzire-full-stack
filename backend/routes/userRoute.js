import express from "express";
import { login, register, admin } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/admin", admin);

export default userRouter;
