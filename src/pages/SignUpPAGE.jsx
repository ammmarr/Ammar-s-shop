import { createUserWithEmailAndPassword} from "firebase/auth";
import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "../componentsStyles/SignUp.css";
import { auth } from "../fireBase";

const SignUpPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();



  const SignIn = (e) => {
    e.preventDefault();
    console.log(auth)
    console.log(emailRef.current.value)
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sign-up-page-container">
      <h1>Sign Up!</h1>
      <form className="sign-up-form-container ">
        <div className="email-div form-section">
          <label id="email">Email</label>
          <input type="email" required ref={emailRef}></input>
        </div>
        <div className="password-div form-section">
          <label id="password">Password</label>
          <input type="password" required ref={passwordRef}></input>
        </div>
        

      <button type="submit" onClick={SignIn}>SIGN IN</button>
          <h6>
            already have an account?<Link to="../LogIn">Log In</Link>
          </h6>
      </form>
    </div>
  );
};

export default SignUpPage;
