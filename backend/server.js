import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const theOrigin = process.env.CLIENT_URL;

// Ensure environment variables are defined
if (!theOrigin) {
  console.error("CLIENT_URL is not defined in the .env file");
  process.exit(1); // Exit the process to prevent server start with a bad configuration
}

// Connect to the database and cloudinary
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: theOrigin, // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
  })
);
app.use(morgan("dev"));

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// Start the server
app.listen(port, () => console.log("Server started on PORT: " + port));
