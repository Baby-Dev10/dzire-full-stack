import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

const Emailverify = () => {
  const { backendUrl, getUserData } = useContext(ShopContext);

  const [currentState, setCurrentState] = useState("Email Verify");

  const navigate = useNavigate;

  const inputRefs = React.useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("Text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const otpArray = inputRefs.current.map((e) => e.value);
      const otp = otpArray.join("");

      const response = await axios.post(
        backendUrl + "/api/user/verify-account",
        { otp }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        getUserData();
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3x1">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <p className="prata-regular px-3 py-2 text-gray-800 flex">
        Enter the 6-digit OTP sent to your email
      </p>
      <div className="flex justify-center mb-8" onPaste={handlePaste}>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <input
              type="text"
              maxlength="1"
              key={index}
              required
              className="w-12 px-3 py-2 border border-gray-800 text-center text-gray-800 rounded-md mx-1"
              ref={(e) => (inputRefs.current[index] = e)}
              onInput={(e) => handleInput(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
      </div>
      <button className="bg-black text-white text-xs px-10 py-4">VERIFY</button>
    </form>
  );
};

export default Emailverify;
