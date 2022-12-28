/* eslint-disable react/no-unescaped-entities */
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "../componentsStyles/SignUp.css";
import { auth } from "../fireBase";
import background from "../assets/logInBackground.jpg"

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
console.log(auth.currentUser)
  function logIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          console.log(userCredential);
          navigate("/");
        } else {
          alert("error");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="sign-up-page-container" style={{background:`url(${background})`}}>
      <h1>Login!</h1>
      <form className="sign-up-form-container ">
        <div className="email-div form-section">
          <label id="email">Email</label>
          <input
            type="email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="password-div form-section">
          <label id="password">Password</label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button className="submit-button"type="submit" onClick={(e) => logIn(e)}>
          LOG IN
        </button>

        <h6>
          Don't have an account     <Link to="../SignUP" style={{color:"white",margin:"0px 10px"}}>Sign UP</Link>
        </h6>
      </form>
    </div>
  );
}

export default LogInPage;
