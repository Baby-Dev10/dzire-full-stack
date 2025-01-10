import React, { useState } from "react";
import axios from "axios";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [linkSent, setLinkSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/send-reset-link",
        { email }
      );
      if (response.data.success) {
        setLinkSent(true);
        setError("");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <h1 className="text-3xl mb-4">Reset Password</h1>
      {!linkSent ? (
        <>
          <p>Enter your registered email.</p>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border px-4 py-2 rounded"
                required
              />
              <button className="bg-black text-white px-4 py-2 rounded">
                Send Reset Link
              </button>
            </div>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </>
      ) : (
        <p className="text-green-500">
          A reset link has been sent to your email. Please check your inbox.
        </p>
      )}
    </div>
  );
};

export default ResetPassword;
