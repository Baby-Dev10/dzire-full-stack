import React, { useState } from "react";
import api from "../utils/api";
// import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPasswordForm = () => {
  //get token from cookies
  const token = useParams().token;
  const navigate = useNavigate();
  console.log(token); // Extract token from cookies
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/api/user/reset-password", // Updated API endpoint
        { token, newPassword }
      );
      if (response.data.success) {
        setMessage(response.data.message);
        toast.success(response.data.message);
        navigate("/login");

        setError("");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <h1 className="text-3xl mb-4">Set New Password</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border px-4 py-2 rounded"
            required
          />
          <button className="bg-black text-white px-4 py-2 rounded">
            Reset Password
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {message && <p className="text-green-500 mt-2">{message}</p>}
    </div>
  );
};

export default ResetPasswordForm;
