import React from 'react';
import {img} from '../../assets/index';
import { useMoralis } from "react-moralis";
import './login.css'

export const Login = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  return (
    <div className="loginContainer">
      <div className="loginButtonContainer" onClick={() => authenticate({ signingMessage: "Hello World!" })}>
        <img src={img.navbar} alt="log" className="loginButton"/>
        <img className="loginButtonText" alt='text' src={img.textLogo2}/>
      </div>
      <div className="navbar">
        <ul className="navlinksLeft">
          <li>
            HOME
          </li>
          <li>
            WHITEPAPER
          </li>
        </ul>

        <ul className="navlinksRight">
          <li>
            ROADMAP
          </li>
          <li>
            LOGIN
          </li>
        </ul>
      </div>
    </div>
    );
}