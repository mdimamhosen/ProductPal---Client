import { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AppContext } from "./../ContextProvider/AppContext";

const SignupForm = () => {
  const { createUser, googleLogin, setuserdata, updateUserData } =
    useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pin: "",
    confirmPassword: "",
    mobileNumber: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, pin, confirmPassword, mobileNumber } =
    formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const location = useLocation();
  const from = location?.state || "/";

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (pin.length !== 6) {
      toast.error("PIN must be exactly 5 digits and numeric");
      return;
    }

    if (pin !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const user = await createUser(email, pin);
      if (user) {
        await updateUserData(firstName + " " + lastName);
        setuserdata(user);
        toast.success("Signup successful.");
        navigate(from);
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Signup error. Please try again.");
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((user) => {
        toast.success(`Signed up successfully`);
        navigate(from);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Google sign-in failed. Please try again.");
      });
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleOnSubmit}
          className="flex w-full flex-col gap-y-4"
        >
          <div className="flex gap-1 flex-col lg:flex-row">
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                First Name <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleOnChange}
                placeholder="Enter first name"
                className="form-style w-full p-1 rounded-md outline-none"
              />
            </label>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Last Name <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleOnChange}
                placeholder="Enter last name"
                className="form-style w-full p-1 rounded-md outline-none"
              />
            </label>
          </div>
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address"
              className="form-style w-full p-1 rounded-md outline-none"
            />
          </label>
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Mobile Number <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="mobileNumber"
              pattern="[0-9]{11}"
              value={mobileNumber}
              onChange={handleOnChange}
              placeholder="Enter mobile number"
              className="form-style w-full p-1 rounded-md outline-none"
            />
          </label>
          <div className="flex flex-col lg:flex-row gap-1">
            <label className="relative w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Create PIN <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="pin"
                value={pin}
                onChange={handleOnChange}
                maxLength={6}
                minLength={6}
                placeholder="Enter 6-digit PIN"
                className="form-style w-full p-1 rounded-md outline-none"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </label>
            <label className="relative w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Confirm PIN <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                maxLength={6}
                minLength={6}
                placeholder="Confirm 6-digit PIN"
                className="form-style w-full p-1 rounded-md outline-none"
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
              >
                {showConfirmPassword ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </span>
            </label>
          </div>
          <button
            type="submit"
            className=" hover:bg-yellow-200 transition-all duration-300 ease-linear rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-semibold text-richblack-900"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="  flex items-center justify-center gap-2   w-full mt-4 border-gray-300 rounded-[8px] bg-white py-[8px] px-[12px] font-medium text-richblack-900 border-caribbeangreen-300"
        >
          <FcGoogle size={20} /> Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
