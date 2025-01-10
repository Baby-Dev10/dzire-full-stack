import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

// Send Reset Password Link
export const sendResetLink = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.json({ success: false, message: "Email is required" });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "15m" } // Token valid for 15 minutes
    );

    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Password Reset Link",
      text: `Click the following link to reset your password: ${resetLink}`,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true, message: "Reset link sent successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// Reset Password
export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.json({ success: false, message: "Token and password required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    return res.json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
