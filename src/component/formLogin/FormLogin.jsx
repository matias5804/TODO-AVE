import React, { useState } from "react";
import axios from "axios";
import "./formLogin.css";

const FormLogin = () => {
  const baseUrl = "http://localhost:5000/usuarios";

  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }

  const iniciarSesion = async (e) => {
    e.preventDefault();

    //   fetch('http://localhost:5000/login', {
    //       method: 'POST',
    //       headers: {
    //           'Content-type' : 'application/json'
    //       },
    //       body: JSON.stringify({user: dataLogin })
    //   }).then(res => res.json()).then((cred)=>{
    //       console.log(cred);
    //   })

    window.location.href = "./todo";
  };

  return (
    <form className="formLogin">
      <div className="form-group">
        <label htmlFor="username" className="text-info">
          Usuario
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="form-control"
          placeholder="Usuario"
          onChange={(e) => handleChange(e)}
          value={dataLogin.username}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contraseña" className="text-info">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          placeholder="Contraseña"
          onChange={(e) => handleChange(e)}
          value={dataLogin.password}
        />
      </div>

      <button
        type="submit"
        name="login"
        className="btnLoginIngresar"
        value="Ingresar"
        onClick={iniciarSesion}
      >
        Ingresar
      </button>

      <div className="div-record">
        <button>¿Olvidó su contraseña?</button>
        <button>Registrarse</button>
      </div>
    </form>
  );
};

export default FormLogin;
