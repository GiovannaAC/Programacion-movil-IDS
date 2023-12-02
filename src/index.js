import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignUp from './SignUp'; 
import Forgot from './Forgot'; 
import Reset from './Reset'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Aquí puede ver las diferentes pantallas, cambie el orden o deje solo la que quiere ver.
  <React.StrictMode>
    <Reset />
    <Forgot />
    <SignUp />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
