import React from "react";
import "../styles/main.scss";
import "../styles/Login.scss";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const Login = () => {
  const GoogleSign = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="Login">
      <Link className="Btn" to="/">
        back home
      </Link>
      <div className="Wrapper">
        <div className="Left" onClick={GoogleSign}>
          <FcGoogle />
          oogle
        </div>
        <div className="Center">
          <div className="Line" />
          <div className="Or">OR</div>
        </div>
        <div className="Right">
          <BsGithub />
          ithub
        </div>
      </div>
    </section>
  );
};

export default Login;
