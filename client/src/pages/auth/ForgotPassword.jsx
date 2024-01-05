import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useForgotPasswordMutation } from "../../features/slices/usersApiSlice";
import Logo from "/src/assets/LoginLogo.png";
import AppLoader from "../../utils/AppLoader";
import { validateEmail } from "../../utils/validateEmail";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const [forgot, { isLoading }] = useForgotPasswordMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("All fields are required");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    try {
      const res = await forgot({ email }).unwrap();
      setEmail("");
      toast.success(res?.message || "Email sent, check your email");
    } catch (err) {
      toast.error(err?.data?.message || err.error?.message);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left side */}
      <div className="hidden sm:flex w-1/2 bg-[#FF9549] justify-center items-center">
        <div className="text-center">
          <img src={Logo} alt="logo" />
        </div>
      </div>

      {/* Right side */}
      <div className="w-full sm:w-1/2 flex justify-center items-center">
        <div className="sm:w-96 p-5">
          <div className="text-center">
            <h2 className="font-fira text-medium text-4xl text-[var(--secondary)]">
              Welcome Again
            </h2>
            <h2 className="mt-3 mb-10 text-[var(--secondary)]">
              Connect with talented chefs
            </h2>
          </div>
          <form onSubmit={submitHandler}>
            <label
              htmlFor="email"
              className="text-[14px] font-inter text-[var(--tertiary)]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              required
              className="w-full rounded-lg placeholder-[var(--primary)] mt-2 mb-4 border border-[#94a3b8] px-[12px] py-[8px]"
            />
            <button
              type="submit"
              className="bg-[var(--primary)] text-white rounded-lg py-2 px-4 w-full mt-4"
              disabled={isLoading}
            >
              {isLoading ? <AppLoader /> : "Reset Email"}
            </button>
          </form>

          <p className="font-medium text-sm text-center mt-5 text-[var(--tertiary-dark)]">
            <Link to="/login" className="text-[var(--primary)]">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
