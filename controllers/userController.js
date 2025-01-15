// import validator from "validator";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import cookieParser from "cookie-parser";
// import userModel from "../models/userModel.js";
// import nodemailer from "nodemailer";

// const createToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET);
// };

// // Route for user login
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await userModel.findOne({ email });

//     if (!user) {
//       return res.json({ success: false, message: "User doesn't exists" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (isMatch) {
//       const token = createToken(user._id);

//       // Set cookie with proper options
//       res.cookie("token", token, {
//         httpOnly: true,
//       });

//       res.json({
//         success: true,
//         user: {
//           id: user._id,
//           email: user.email,
//           // other user data you want to send
//         },
//       });
//     } else {
//       res.json({ success: false, message: "Invalid credentials" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Route for user register
// export const register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // checking user already exists or not
//     const exists = await userModel.findOne({ email });
//     if (exists) {
//       return res.json({ success: false, message: "User already exists" });
//     }

//     // validating email format & strong password
//     if (!validator.isEmail(email)) {
//       return res.json({
//         success: false,
//         message: "Please enter a valid email",
//       });
//     }
//     if (password.length < 6) {
//       return res.json({
//         success: false,
//         message: "Please enter a strong password",
//       });
//     }

//     // hashing user password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new userModel({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     const user = await newUser.save();

//     const token = createToken(user._id);

//     res.json({ success: true, token });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// export const admin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (
//       email === process.env.ADMIN_EMAIL &&
//       password === process.env.ADMIN_PASSWORD
//     ) {
//       const token = jwt.sign(email + password, process.env.JWT_SECRET);
//       res.json({ success: true, token });
//     } else {
//       res.json({ success: false, message: "Invalid credentials" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// export const sendResetLink = async (req, res) => {
//   const email = req.query.email;
//   console.log("Email:", email);

//   try {
//     // Find the user by email
//     const user = await userModel.findOne({ email });

//     if (!user) {
//       return res
//         .status(404)
//         .json({ success: false, message: "User not found" });
//     }

//     // Generate a JWT reset token
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER, // Your email
//         pass: process.env.EMAIL_PASS, // App Password
//       },
//     });

//     const resetURL = `http://localhost:5173/reset-password-form/${token}`;

//     const mailOptions = {
//       from: process.env.EMAIL_USER, // Sender address
//       to: user.email,
//       subject: "Password Reset Request",
//       html: `<p>Click <a href="${resetURL}">here</a> to reset your password. This link is valid for 1 hour.</p>`,
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error("Mail not sent:", error);
//         return res.status(500).json({
//           success: false,
//           message: "Failed to send email. Please try again later.",
//         });
//       } else {
//         console.log("Mail sent:", info.response);
//         return res.json({
//           success: true,
//           message: "Password reset link sent to email.",
//         });
//       }
//     });
//   } catch (error) {
//     console.error("Internal Server Error:", error);
//     return res
//       .status(500)
//       .json({ success: false, message: "Internal Server Error" });
//   }
// };

// // Reset password
// export const resetPassword = async (req, res) => {
//   const { token, newPassword } = req.body;

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await userModel.findById(decoded.userId);
//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid token or user does not exist",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(newPassword, 6);
//     user.password = hashedPassword;
//     await user.save();

//     res.json({ success: true, message: "Password successfully reset" });
//   } catch (error) {
//     console.error(error);
//     if (error.name === "TokenExpiredError") {
//       return res
//         .status(400)
//         .json({ success: false, message: "Reset token expired" });
//     }
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// };

// // Get user profile
// export const getUserProfile = async (req, res) => {
//   try {
//     // Fetch user details using the ID from the request (e.g., req.user.id)
//     const user = await userModel.findById(req.user.id).populate("orders"); // Adjust based on your schema

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Respond with user details, ensuring 'addresses' is an array
//     res.json({
//       name: user.name,
//       email: user.email,
//       addresses: user.addresses || [], // Ensure addresses is an array
//       orders: user.orders, // Include orders or other details if needed
//     });
//   } catch (error) {
//     // Handle any server errors
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Get addresses
// export const getAddresses = async (req, res) => {
//   const user = await userModel.findById(req.user.id);
//   res.json(user.addresses);
// };

// // Add address
// export const addAddress = async (req, res) => {
//   const { address } = req.body;

//   const user = await userModel.findById(req.user.id);
//   const newAddress = { _id: new Date().getTime().toString(), address };
//   user.addresses.push(newAddress);

//   await user.save();
//   res.json(newAddress);
// };

// // Delete address
// export const deleteAddress = async (req, res) => {
//   const user = await userModel.findById(req.user.id);

//   user.addresses = user.addresses.filter((addr) => addr._id !== req.params.id);
//   await user.save();
//   res.json({ message: "Address deleted" });
// };

import userModel from "../models/userModel.js";
import bcryptjs from "bcrypt";
import crypto from "crypto";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import {
  sendPasswordResetEmail,
  sendResetSuccessEmail,
} from "../config/emails.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }
    const userAlreadyExists = await userModel.findOne({ email });
    console.log("userAlreadyExists", userAlreadyExists);
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ sucess: false, message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = new userModel({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpires: Date.now() + 24 * 60 * 60 * 1000,
    });
    await user.save();

    //jwt
    generateTokenAndSetCookie(res, user._id);

    res.status(201).json({
      sucess: true,
      message: "Account created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ sucess: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log("Error in login ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};
export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout ", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const sendResetLink = async (req, res) => {
  const { email } = req.body;
  console.log("Email:", email);
  try {
    const user = await userModel.findOne({ email });
    console.log("user", user);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiresAt;

    await user.save();

    // send email
    await sendPasswordResetEmail(
      user.email,
      `${process.env.CLIENT_URL}/reset-password-form/${resetToken}`
    );

    res.status(200).json({
      success: true,
      message: "Password reset link sent to your email",
    });
  } catch (error) {
    console.log("Error in forgotPassword ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    // const { token } = req.params;
    const { newPassword, token } = req.body;

    const user = await userModel.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });

    //const resetURL = `http://localhost:5173/reset-password-form/${token}`;

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired reset token" });
    }

    // update password
    const hashedPassword = await bcryptjs.hash(newPassword, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();

    await sendResetSuccessEmail(
      user.email,
      `${process.env.CLIENT_URL}/reset-password/${token}`
    );

    res
      .status(200)
      .json({ success: true, message: "Password reset successful" });
  } catch (error) {
    console.log("Error in resetPassword ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export const admin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.cookie("AdminToken", token, { httpOnly: true });
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId).select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("Error in checkAuth ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};
