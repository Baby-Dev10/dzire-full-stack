// import mongoose from "mongoose";
// import bcrypt from "bcrypt";

// const addressSchema = new mongoose.Schema({
//   type: { type: String, required: true }, // Home, Work, etc.
//   address: { type: String, required: true }, // Full address as a string
// });

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     cartData: { type: Object, default: {} },
//     addresses: [addressSchema],
//     orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
//   },
//   { minimize: false }
// );

// // userSchema.pre("save", async function (next) {
// //   if (!this.isModified("password")) return next();
// //   this.password = await bcrypt.hash(this.password, 10);
// //   next();
// // });

// const userModel = mongoose.models.user || mongoose.model("user", userSchema);

// export default userModel;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    lastLogin: { type: Date, default: Date.now },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpires: Date,
  },
  { timestamps: true }
);

// const userModel = mongoose.model("User", userSchema);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
