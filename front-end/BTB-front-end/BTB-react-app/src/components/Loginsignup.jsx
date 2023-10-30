import React, { useState } from 'react';
import './Loginsignup.css';
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
import { Link } from 'react-router-dom';
import Users from './API_request/User';
import Signup from './signup';

const handleSignUp = () => {
    // Redirect logic can go here if needed
}

const Login = () => {
    const [action, setAction] = useState("Login");
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [emailError, setEmailError] = useState('');
    const [signinpop, signin]=useState(false);

    const handleLogin = async () => {
        if (!validateEmail(formData.email)) {
            setEmailError('Please enter a valid email address.');
            return;
        } else {
            setEmailError('');

            try {
                const response = await Users(formData);
                console.log('API response:', response);
            } catch (error) {
                console.error('API error:', error);
            }
        }
    }

    const handleForgotPassword = () => {
        console.log('Forgot Password logic goes here');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const validateEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
    }

    if (!signinpop){
        return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
        }}>
            <div className='container'>
                <div className="header">
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <img src={email_icon} alt='' />
                        <input
                            type="email"
                            name="email"
                            placeholder='Email Id'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {emailError && <div className="error-message">{emailError}</div>}
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt='' />
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <span className="forgot-password" onClick={handleForgotPassword}>Forgot Password ?</span>
                        {/* <Link to="/signup" className="signup-text">New user!</Link> */}
                        <div className='signup-text' onClick={()=>{signin(true);console.log(signinpop)}} >New user!</div>
                    </div>
                </div>
                <div className="submit-container">
                    <button type="submit" className={action === 'Login' ? 'submit gray' : "submit"}>Login</button>
                </div>
            </div>
        </form>
    )
    if(signinpop) {
        console.log(signinpop)
        return(
        <><Signup/></>
    )
        }
    }
}

export default Login;
