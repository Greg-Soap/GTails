import React from "react";
import "../styles/main.scss";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  return (
    <section className="Login">
      <Link className="Btn" to="/">
        back home
      </Link>
      <div className="Wrapper">
        <div className="Left" onClick={google}>
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
