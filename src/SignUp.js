import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const cambiarValor = (e, setter) => {
    const value = e.target.value;
    setter(value);
  };

  const guardarClick = (e) => {
    e.preventDefault(); 

    if (!username || !password || !email) {
      alert("Por favor, complete todos los campos requeridos.");
      return; 
    }
  
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };


  return (
    <div className="wrapper">
        <img src="/img/logo.png" alt="Logo" />
    <div className="App">
        <h1>Sign Up</h1>
        <div className="formulario">
        <div className="campo">
        <input
            id="username"
            name="username"
            value={username}
            onChange={(e) => cambiarValor(e, setUsername)}
            placeholder="type your username" required
        />
         <ion-icon name="person-outline" className="icono" style={{ right: '60px', top: '60%', position: 'absolute' }}></ion-icon>
        </div>

        <div className="campo">
        <input
            id="email"
            name="email"
            value={email}
            onChange={(e) => cambiarValor(e, setEmail)}
            placeholder="type your email" required
        />
         <ion-icon name="mail-outline" className="icono" style={{ right: '60px', top: '68%', position: 'absolute' }}></ion-icon>
        </div>
       
        <div className="campo">
        <input
            id="password"
            name="password"
            value={password}
            onChange={(e) => cambiarValor(e, setPassword)}
            type="password" 
            placeholder="******" required
        />
        <ion-icon name="lock-closed-outline" className="icono" style={{ right: '60px', top: '75%', position: 'absolute' }}></ion-icon>
        </div>
        <button type="button" className="btn-login" onClick={guardarClick}>Sign Up</button>
      </div>
        <div className='account'>
            <h2>or Login</h2> 
        </div>
    </div>
    </div>
  );
}


export default SignUp;