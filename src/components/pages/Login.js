import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./Login.css";
import truck from "../../assets/truck.png";
import { useHistory } from "react-router";

const Signin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="leftBar">
        <h1 className="whiteTitle">Insurance at your fingertips...</h1>
        <img className="truckImg" src={truck} />
      </div>
      <div className="rightBar">
        <div className="signin">
          <form action="">
            <h1 className="title1">Get Started.</h1>
            <p className="pText">Email Address</p>
            <input className="textInput" ref={emailRef} type="email" />
            <p className="pText">Password</p>
            <input className="textInput" ref={passwordRef} type="password" />
            <button className="signInBtn" onClick={signIn}>
              Sign in{""}
            </button>
            <h6>
              Not yet register?{" "}
              <span onClick={""} className="signin__link">
                Sign up
              </span>
            </h6>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
