<<<<<<< HEAD
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Request password reset
export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Generate a JWT token for password reset
    const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
=======
import bcrypt from "bcrypt";
import crypto from "crypto";
import userModel from "../models/userModel.js";
import transporter from "../config/nodemailer.js";

export const sendResetLink = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpireAt = Date.now() + 15 * 60 * 1000; // 15 mins expiration

    user.resetToken = resetToken;
    user.resetTokenExpireAt = resetTokenExpireAt;
    await user.save();

    // Send email with reset link
    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Password Reset Request",
      html: `<p>You requested a password reset. Click the link below to reset your password:</p>
             <a href="${resetLink}" target="_blank">${resetLink}</a>
             <p>If you did not request this, please ignore this email.</p>`,
    };

    await transporter.sendMail(mailOption);

    return res.json({
      success: true,
      message: "Reset link sent to your email. Please check your inbox.",
>>>>>>> 4123ad3c83d349a9f8bd346a9bf09935fd50fb00
    });

    // Send password reset email
    const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
    const mailOptions = {
      from: process.env.SMTP_USER,
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
<<<<<<< HEAD
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred. Please try again later." });
  }
};

// Reset password
export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    // Verify the reset token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Hash and set the new password (ensure you hash it using bcrypt before saving in a real application)
    user.password = newPassword; // This should be hashed!
    await user.save();

    res.status(200).json({ message: "Password has been reset successfully." });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid or expired token." });
=======
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const resetPasswordWithLink = async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({
      success: false,
      message: "Token and new password are required.",
    });
  }

  try {
    const user = await userModel.findOne({
      resetToken: token,
      resetTokenExpireAt: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired token." });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.resetToken = null;
    user.resetTokenExpireAt = null;

    await user.save();

    return res.json({ success: true, message: "Password reset successfully." });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
>>>>>>> 4123ad3c83d349a9f8bd346a9bf09935fd50fb00
  }
};
