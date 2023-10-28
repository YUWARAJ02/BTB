import React, { useState } from 'react';
import './Loginsignup.css';
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
import { Link } from 'react-router-dom';
const handleSignUp = () => {
    // Redirect logic can go here if needed
}


const Login = () => {
    const [action, setAction] = useState("Login");

    const handleLogin = () => {
        console.log('Login logic goes here');
    }

    const handleForgotPassword = () => {
        console.log('Forgot Password logic goes here');
    }

    return (
        <div className='background'>
            <div className='container'>
                <div className="header">
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    <form></form>
                    <div className='input'>
                        <img src={email_icon} alt='' />
                        <input type="email" placeholder='Email Id' />
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt='' />
                        <input type="password" placeholder='Password' />
                        <span className="forgot-password" onClick={handleForgotPassword}>Forgot Password ?</span>
                    </div>
                </div>
                <div className="submit-container">
                    <div className={action === 'Login' ? 'submit gray' : "submit"} onClick={handleLogin}>Login</div>
                </div>
                <div className="signup-text">
                New user! <Link to="/signup" className="highlighted-text">Sign up.</Link>
    </div>
            </div>
        </div>
    )
}

export default Login;
