import React, { useState } from 'react';
import './App.css';

function App() {

    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  const cambiarValor = (e, setter) => {
    const value = e.target.value;
    setter(value);
  };

  const guardarClick = (e) => {
    e.preventDefault(); 

    if (!username || !password) {
      alert("Por favor, complete todos los campos requeridos.");
      return; 
    }
  
    console.log("Username:", username);
    console.log("Password:", password);
  };


  return (
    <div className="wrapper">
        <img src="/img/logo.png" alt="Logo" />
    <div className="App">
        <h1>Login</h1>
        <div className="formulario">
        <div className="campo">
        <input
            id="username"
            name="username"
            value={username}
            onChange={(e) => cambiarValor(e, setUsername)}
            placeholder="Username" required
        />
         <ion-icon name="person-outline" className="icono" style={{ right: '60px', top: '60%', position: 'absolute' }}></ion-icon>
        </div>
       
        <div className="campo">
        <input
            id="password"
            name="password"
            value={password}
            onChange={(e) => cambiarValor(e, setPassword)}
            type="password" 
            placeholder="Password" required
        />
        <ion-icon name="lock-closed-outline" className="icono" style={{ right: '60px', top: '70%', position: 'absolute' }}></ion-icon>
        </div>
        <button type="button" className="btn-login" onClick={guardarClick}>Login</button>
      </div>
        <div className='forgot'>
            <h2>Forgot password?</h2>
        </div>
    </div>
    </div>
  );
}


export default App;