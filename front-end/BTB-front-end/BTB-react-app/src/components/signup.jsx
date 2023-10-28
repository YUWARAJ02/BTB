import React, { useState } from 'react';
import './Loginsignup.css';
import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
import { Link } from 'react-router-dom';

const Signup = () => {
    const [action, setAction] = useState("Sign Up");
    const handleSignUp = () => {
    }
    

    return (
        <div className='background'>
            <div className='container'>
                <div className="header">
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <img src={user_icon} alt='' />
                        <input type="text" placeholder='Name' />
                    </div>
                    <form></form>
                    <div className='input'>
                        <img src={email_icon} alt='' />
                        <input type="email" placeholder='Email Id' />
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt='' />
                        <input type="password" placeholder='Password' />
                    </div>
                    {action === "Sign Up" &&
                        <div className='input'>
                            <img src={password_icon} alt='' />
                            <input type="date" placeholder='Date-Of-Birth' />
                        </div>
                    }
                </div>
                <div className="submit-container">
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
