import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../ContextProvider/AppContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { signInUser, googleLogin } = useContext(AppContext);
  const location = useLocation();
  const from = location?.state?.from || "/";

  const [formData, setFormData] = useState({
    email: "",
    pin: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, pin } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, pin);
      toast.success("Login successful.");
      navigate(from);
    } catch (err) {
      toast.error("Invalid credentials. Please try again.");
      console.error("Login error:", err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Signed in successfully.");
      navigate(from);
    } catch (err) {
      toast.error("Google login failed. Please try again.");
      console.error("Google login error:", err);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleOnSubmit}
        className="mt-6 flex w-full flex-col gap-y-4"
      >
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="form-style w-full p-2 rounded-md outline-none"
          />
        </label>
        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            PIN <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="pin"
            value={pin}
            onChange={handleOnChange}
            placeholder="Enter PIN"
            className="form-style w-full p-2 rounded-md outline-none"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link className="cursor-not-allowed hidden" to="/forgot-password">
            <p className="mt-1 ml-auto max-w-max text-xs text-blue-100 hover:underline transition-all ease-linear duration-300">
              Forgot Password
            </p>
          </Link>
        </label>
        <button
          type="submit"
          className="hover:bg-yellow-200 transition-all duration-300 ease-linear rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-semibold text-richblack-900"
        >
          Sign In
        </button>
      </form>
      <button
        onClick={handleGoogleLogin}
        type="button"
        className="flex items-center mt-4 w-full justify-center gap-2 border border-gray-300 rounded-[8px] bg-white py-[8px] px-[12px] font-medium text-richblack-900"
      >
        <FcGoogle fontSize={24} />
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginForm;
