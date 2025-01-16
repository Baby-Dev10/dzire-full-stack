

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
dotenv.config();
// Go up one directory level to reach the root of your project
const rootDir = path.resolve(__dirname);

// Middleware
app.use(cors());
app.use(express.json());

app.use(cookieParser());
app.use(morgan("dev"));
// Serve static assets for React apps
app.use("/", express.static(path.join(rootDir, "frontend/dist")));
app.use("/admin", express.static(path.join(rootDir, "admin/dist")));



// Fallback route for user React app
app.get("/*", (req, res,next) => {
  if (req.path.startsWith("/api")) {
    return next();
  }
  res.sendFile(path.join(rootDir, "frontend/dist/index.html"));
});

// Fallback route for admin React app
app.get("/admin/*", (req, res,next) => {
  if (req.path.startsWith("/api")) {
    return next();
  }
  res.sendFile(path.join(rootDir, "admin/dist/index.html"));
});


//backend api
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter); 


// Catch-all route for unmatched requests
app.all("*", (req, res) => {
  res.status(404).send("Not Found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});






