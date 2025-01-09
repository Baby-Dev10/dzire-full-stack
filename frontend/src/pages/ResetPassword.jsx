import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ResetPassword = () => {
<<<<<<< HEAD
=======
  const { token } = useParams();
>>>>>>> 4123ad3c83d349a9f8bd346a9bf09935fd50fb00
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const { search } = useLocation();
  const token = new URLSearchParams(search).get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
<<<<<<< HEAD
      const response = await axios.post(
        "http://localhost:4000/api/auth/reset-password",
        { token, newPassword }
      );
=======
      const response = await axios.post("/api/auth/reset-password", {
        token,
        newPassword,
      });
>>>>>>> 4123ad3c83d349a9f8bd346a9bf09935fd50fb00
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
        >
          Reset Password
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
=======
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <h2>Enter New Password</h2>
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <button type="submit">Reset Password</button>
      {message && <p>{message}</p>}
    </form>
>>>>>>> 4123ad3c83d349a9f8bd346a9bf09935fd50fb00
  );
};

export default ResetPassword;
