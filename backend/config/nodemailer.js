import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail", // Use your email service
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_,
  },
});

export default transporter;
