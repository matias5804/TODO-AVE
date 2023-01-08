import React from "react";
import FormLogin from "../formLogin/FormLogin";
import "./login.css";
import brandLogo from "../../assets/brand.png";

const Login = () => {
  return (
    <div className="div-grad">
      <div className="login-container">
        <div className="div-img">
          <img src={brandLogo} alt="brand" />
        </div>
        <div className="div-txt">
          <h2>ORGANIZADOR DIARIOS DE TAREAS</h2>
          <h4>Completa tus tareas de forma rápida, sencilla y organizada</h4>
        </div>
        <div className="div-img">
          <img src="" alt="" />
        </div>

        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
