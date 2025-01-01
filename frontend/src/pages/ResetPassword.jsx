import React, { useState } from "react";
import { assets } from "../assets/assets";
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [currentState, setCurrentState] = useState("Reset Password");
  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3x1">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <p className="prata-regular px-3 py-2 text-gray-800 flex">
        Enter your registered email address
      </p>
      <div className="flex items-center border border-gray-400 px-3 py-2 gap-2 rounded-full">
        <img src={assets.mail_icon} alt="" className="w-3 h-3" />
        <input
          type="email"
          placeholder="Email id"
          className="bg-transparent outline-none"
          value={email}
          oncChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button className="bg-black text-white text-s px-10 py-4 rounded-full">
        Submit
      </button>
    </form>
  );
};

export default ResetPassword;
