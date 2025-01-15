
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

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
dotenv.config();
const theOrigin = process.env.CLIENT_URL;
// middlewares
app.use(express.json());
app.use(cookieParser());
app.all("*", (req, res, next) => {
 

  res.header("Access-Control-Allow-Origin", theOrigin);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  console.log("hit middle ware");
  next();
});

app.use(
  cors({
    origin: theOrigin, // Replace this with your frontend URL
    credentials: true, // Allow cookies to be sent
  })
);
app.use(morgan("dev"));

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter); // mount the reset password route

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server started on PORT : " + port));
// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/mongodb.js";
// import connectCloudinary from "./config/cloudinary.js";
// import userRouter from "./routes/userRoute.js";
// import productRouter from "./routes/productRoute.js";
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";
// import cookieParser from "cookie-parser";

// // App Config
// const app = express();
// const port = process.env.PORT || 4000;
// connectDB();
// connectCloudinary();
// dotenv.config();

// // middlewares
// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Replace this with your frontend URL
//     credentials: true, // Allow cookies to be sent
//   })
// );

// // app.use(
// //   cors({
// //     origin: "*",
// //     credentials: true,
// //   })
// // );

// // api endpoints
// app.use("/api/user", userRouter);
// app.use("/api/product", productRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter); // mount the reset password route

// app.get("/", (req, res) => {
//   res.send("API Working");
// });

// app.listen(port, () => console.log("Server started on PORT : " + port));
