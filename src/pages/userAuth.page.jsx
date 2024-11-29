import { useRef } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import googleIcon from "../../public/assets/img/google.png"; // Update the path as per your project
import AnimationWrapper from "../common/page-animation"; // Animation wrapper component
import Navbar from "../components/Navbar";

const UserAuthForm = ({ type }) => {
  const authForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const serverRoute = type === "sign-up" ? "/signup" : "/signin";

    const form = new FormData(authForm.current);
    const formData = Object.fromEntries(form.entries());
    const { fullname, email, password } = formData;

    if (type === "sign-up" && fullname.length < 3) {
      return toast.error("Full Name must be at least 3 characters long.");
    }
    if (!email) {
      return toast.error("Email is required.");
    }
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long.");
    }

    toast.success("Form submitted successfully!");
    // Add your API call logic here
  };

  const handleGoogleAuth = (e) => {
    e.preventDefault();
    toast.success("Google Authentication initiated!");
    // Add your Google Authentication logic here
  };

  return (
    <AnimationWrapper keyValue={type}>
      <Navbar />
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <Toaster />
        <form
          ref={authForm}
          className="w-[90%] max-w-[400px] bg-white p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-3xl font-semibold text-center mb-8">
            {type === "sign-up" ? "Join Us Today" : "Welcome Back"}
          </h1>

          {type === "sign-up" && (
            <div className="relative mb-4">
              <input
                name="fullname"
                type="text"
                placeholder="Full Name"
                className="w-full p-3 pl-5 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute top-4 left-4 text-gray-400">
                <i className="fi-rr-user"></i>
              </span>
            </div>
          )}

          <div className="relative mb-4">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 pl-5 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute top-4 left-4 text-gray-400">
              <i className="fi-rr-envelope"></i>
            </span>
          </div>

          <div className="relative mb-4">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 pl-5 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute top-4 left-4 text-gray-400">
              <i className="fi-rr-key"></i>
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 text-white bg-black rounded-lg hover:bg-gray-800"
            onClick={handleSubmit}
          >
            {type === "sign-up" ? "Sign Up" : "Log In"}
          </button>

          <div className="flex items-center justify-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            type="button"
            className="w-full py-3 flex items-center justify-center gap-3 bg-black text-white rounded-lg hover:bg-gray-800"
            onClick={handleGoogleAuth}
          >
            <img src={googleIcon} alt="Google Icon" className="w-5" />
            Continue With Google
          </button>

          <p className="mt-6 text-center text-gray-500">
            {type === "sign-up" ? (
              <>
                Already a member?{" "}
                <Link to="/login" className="text-blue-500 underline">
                  Sign In
                </Link>
              </>
            ) : (
              <>
                Dont have an account?{" "}
                <Link to="/signup" className="text-blue-500 underline">
                  Sign Up
                </Link>
              </>
            )}
          </p>
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthForm;
