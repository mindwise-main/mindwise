import { useContext, useRef } from "react";
import AnimationWrapper from "../common/page-animation";
import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import { Link, Navigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { storeInSession } from "../common/session";
import { UserContext } from "../App";
import { authWithGoogle } from "../common/firebase";
import Navbar from "../components/Navbar";

const UserAuthForm = ({ type }) => {
  // Right now, we are using ref to get the form data but we can also get it done by passing an id to the form and then pass the form id to the form element.
  const authForm = useRef();

  let {
    userAuth: { access_token },
    setUserAuth,
  } = useContext(UserContext);

  console.log(access_token);

  const userAuthThroughServer = (serverRoute, formData) => {
    console.log(import.meta.env.VITE_SERVER_DOMAIN + serverRoute);
    axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
      .then(({ data }) => {
        storeInSession("user", JSON.stringify(data));
        console.log(sessionStorage);

        setUserAuth(data);
      })
      .catch(({ response }) => {
        toast.error(response.data.error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form from submitting

    let serverRoute = type == "log-in" ? "/login" : "/signup";

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

    //FormData
    let form = new FormData(formElement);
    let formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    //destructuring is used to extract values from an object or array and assign them to variables in one go without repeating the object name or array index multiple times in the code block where the values are being used.
    let { fullname, email, password } = formData; //destructuring

    //form validation

    if (fullname) {
      if (fullname.length < 3) {
        return toast.error("Fullname must be at least 3 letters long");
      }
    }

    if (!email.length) {
      return toast.error("Enter Email");
    }
    if (!emailRegex.test(email)) {
      return toast.error("Email is invalid");
    }
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must contain at least one number, one uppercase letter, one lowercase letter, and at least 6 characters"
      );
    }

    userAuthThroughServer(serverRoute, formData);
  };

  const handleGoogleAuth = (e) => {
    
    e.preventDefault();

    authWithGoogle().then(user => {
      
      let serverRoute = "/google-auth";

      let formData = {
        access_token: user.accessToken
      }

      userAuthThroughServer(serverRoute, formData);

    })
    .catch((error) => {
      toast.error('Trouble Login through Google');
      return console.log(error.message);
    });
      

  };

  return (
    access_token ?
    <Navigate to="/" />
    :
    <>
    <Navbar />
    <AnimationWrapper keyValue={type}>
      <section className="h-screen flex items-center justify-center">
        <Toaster />
        <form ref={authForm} id="formElement" className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {type == "log-in" ? "Welcome back" : "Join us today"}
          </h1>

          {type != "log-in" ? (
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full Name"
              icon="fi-rr-user"
            />
          ) : (
            ""
          )}

          <InputBox
            name="email"
            type="email"
            placeholder="E mail"
            icon="fi-rr-envelope"
          />

          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon="fi-rr-key"
          />

          <button
            className="btn-dark center mt-14"
            type="submit"
            onClick={handleSubmit}
          >
            {type.replace("-", " ")}
          </button>

          <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>

          <button onClick={handleGoogleAuth} className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
            <img src={googleIcon} className="w-5 " />
            continue with google
          </button>

          {type == "log-in" ? (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Don't have an account?
              <Link to="/signup" className="underline text-black text-xl ml-1">
                Sign up
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-dark-grey text-xl text-center">
              Already a member?
              <Link to="/login" className="underline text-black text-xl ml-1">
                Log in
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimationWrapper>
    </>
    
  );
};

export default UserAuthForm;
