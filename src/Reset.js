import React, { useState } from 'react';
import './Reset.css';

function Reset() {

  const [password, setPassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
 
 

  const cambiarValor = (e, setter) => {
    const value = e.target.value;
    setter(value);
  };

  const guardarClick = (e) => {
    e.preventDefault(); 

    if (!password || !newpassword || !confirmpassword) {
      alert("Por favor, complete todos los campos requeridos.");
      return; 
    }
  
    console.log("Password:", password);
    console.log("New Password:", newpassword);
    console.log("Confirm Password:", confirmpassword);
  };


  return (
    <div className="wrapper">
        <img src="/img/logo.png" alt="Logo" />
    <div className="App">
        <h1>Reset Password</h1>
        <div className="formulario">
        <div className="campo">
        <input
            id="password"
            name="password"
            value={password}
            onChange={(e) => cambiarValor(e, setPassword)}
            placeholder="******" required
        />
         <ion-icon name="lock-closed-outline" className="icono" style={{ right: '60px', top: '72%', position: 'absolute' }}></ion-icon>
        </div>

        <div className="campo">
        <input
            id="newpassword"
            name="newpassword"
            value={newpassword}
            onChange={(e) => cambiarValor(e, setNewpassword)}
            placeholder="type your password" required
        />
         <ion-icon name="lock-closed-outline" className="icono" style={{ right: '60px', top: '79%', position: 'absolute' }}></ion-icon>
        </div>

        <div className="campo">
        <input
            id="confirmpassword"
            name="confirmpassword"
            value={confirmpassword}
            onChange={(e) => cambiarValor(e, setConfirmpassword)}
            placeholder="type your password" required
        />
         <ion-icon name="lock-closed-outline" className="icono" style={{ right: '60px', top: '87%', position: 'absolute' }}></ion-icon>
        </div>


       
     
        <button type="button" className="btn-login" onClick={guardarClick}>Reset</button>
      </div>
    </div>
    </div>
  );
}


export default Reset;