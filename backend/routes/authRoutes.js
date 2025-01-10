import express from "express";
import { sendResetLink, resetPassword } from "../controllers/authController.js";

//import nodemailer from "nodemailer";
//import User from "../models/userModel.js";

const authRouter = express.Router();

authRouter.post("/send-reset-link", sendResetLink);
authRouter.post("/reset-password", resetPassword);

// Reset Password Route
{
  /*authRouter.post("/reset-password", async (req, res) => {
  const { email } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Generate a reset token (can be more secure with JWT)
    const resetToken = Math.random().toString(36).substr(2);

    // Save the token to the user record with an expiry (optional)
    user.resetToken = resetToken;
    user.tokenExpiry = Date.now() + 3600000; // 1 hour
    await user.save();

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASS, // Your email password
      },
    });

    const resetUrl = `http://localhost:4000/auth/reset-password/${resetToken}`;

    // Send email
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Password Reset Request",
      html: `
        <p>You requested a password reset. Click the link below to reset your password:</p>
        <a href="${resetUrl}">Reset Password</a>
        <p>If you didn't request this, please ignore this email.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ message: "Password reset email sent successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
});*/
}

export default authRouter;
