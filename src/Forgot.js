import React, { useState } from 'react';
import './Forgot.css';

function Forgot() {

  const [email, setEmail] = useState("");

  const cambiarValor = (e, setter) => {
    const value = e.target.value;
    setter(value);
  };

  const guardarClick = (e) => {
    e.preventDefault(); 

    if (!email) {
      alert("Por favor, complete todos los campos requeridos.");
      return; 
    }
  
    console.log("Email:", email);
  };


  return (
    <div className="wrapper">
        <img src="/img/logo.png" alt="Logo" />
    <div className="App">
        <h1>Forgot Password</h1>
        <div className="formulario">
        <div className="campo">
        <input
            id="email"
            name="email"
            value={email}
            onChange={(e) => cambiarValor(e, setEmail)}
            placeholder="type your email" required
        />
         <ion-icon name="mail-outline" className="icono" style={{ right: '60px', top: '72%', position: 'absolute' }}></ion-icon>
        </div>
       
        <button type="button" className="btn-login" onClick={guardarClick}>Send</button>
      </div>
        <div className='account'>
            <h2>Login</h2> 
        </div>
    </div>
    </div>
  );
}


export default Forgot;