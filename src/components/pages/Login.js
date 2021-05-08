import React, { useRef } from "react";
import { auth } from "../../Firebase";

const Signin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signin">
      <form action="">
        <h1>Sign in</h1>
        <input ref={emailRef} type="email" />
        <input ref={passwordRef} type="password" />
        <button onClick={signIn}>Sign in </button>
        <h6>
          Not yet register?{" "}
          <span onClick={""} className="signin__link">
            Sign up
          </span>
        </h6>
      </form>
    </div>
  );
};

export default Signin;
