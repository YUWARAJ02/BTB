import React, { useState } from 'react';
import './Loginsignup.css'
import { useAuth0 } from '@auth0/auth0-react';
import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";

const Loginsignup = () => {
    const [action, setAction] = useState("Login");
    const { loginWithRedirect, isAuthenticated, user } = useAuth0(); 
    const handleGoogleLogin = () => {
        loginWithRedirect({ connection: 'google-oauth2' });
    };
    const handleFacebookLogin = () => {
        loginWithRedirect({ connection: 'facebook' });
    };

    const userInfo = isAuthenticated ? user : null;

    function handleGoogleLogin1() {
        // Redirect the user to Google's authentication page
        window.location.href = "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?login_hint&response_type=code&redirect_uri=https%3A%2F%2Flogin.us.auth0.com%2Flogin%2Fcallback&scope=email%20profile&state=Fe26.2**c063bc21e204711d43f743ea997b3831c8a216dc3607f5c32be500c259f5d077*3qHqjJbxfi-8TxursieyqA*55NplyF4iB-u5HPxwT18gB8ktLAoesDnH8PVTVkYsB-5b9u2Xs8Fhup9f50x_gHwg2-73COJlcrL9TCEniHhRj5V88q50Xvu7y7OljI60Mely6z20S4_aen7ORkCCi28**60abe62de05a6c4921e6aa4967c69fa017283d2e70758971cd33378009f2ffe7*sjsdL8hD3K0KuL7G0fEoaxEommTpboY7GWhyPdR8S_c&client_id=135034099850-p02kdnahdqi4b1rtd59babpvrgfgpb4o.apps.googleusercontent.com&service=lso&o2v=1&theme=glif&flowName=GeneralOAuthFlow";
      }

    return(
        <div className='background'>
            {userInfo && (
      <div>
        <h2>Welcome, {userInfo.name}!</h2>
        <p>Email: {userInfo.email}</p>
      </div>
    )}
            <div className='container'>
                <div className="header">
                    <div className='text'>{action}</div>
                    <div className='underline'></div>    
                </div>
                <div className='inputs'>
                    {action==="login"?<div></div>:<div className='input'>
                        <img src={user_icon} alt=''/>
                        <input type="text" placeholder='Name'/>
                    </div>}
                    <form></form>
                    <div className='input'>
                        <img src={email_icon} alt=''/>
                        <input type="email" placeholder='Email Id'/>
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt=''/>
                        <input type="password" placeholder='Password'/>
                    </div>
                    {action==="Sign Up" && 
                        <div className='input'>
                            <img src={password_icon} alt=''/>
                            <input type="date" placeholder='Date-Of-Birth'/>
                        </div>
                    }   
                </div>
                <div className="submit-container">
                    <div className={action==='Login'?'submit gray':"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                </div>
                <div className="line"></div>
                <p>Login or sign up with</p>
                <div className="social-login">
                    <button onClick={handleGoogleLogin} className="social-button google-button">
                        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google" className="social-icon" />
                    </button>
                    <button onClick={handleFacebookLogin} className="social-button facebook-button">
                        <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" alt="Facebook" className="social-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Loginsignup;