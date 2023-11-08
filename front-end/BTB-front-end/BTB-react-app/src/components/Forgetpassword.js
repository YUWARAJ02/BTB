import React, { useState } from 'react';
import "./Forgetpassword.css"
function Forgetpassword() {
    const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      console.log('Email entered:', email);
      setIsValidEmail(true);
      // Here you can do whatever you want with the valid email value
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <form className="dabba" onSubmit={handleSubmit}>
      <p>Please enter the email id which is connected with the Book My Vacation</p>
      <label className='emailtext' htmlFor='email'>Enter Email id:</label>
      <input
        className={isValidEmail ? "mailinputer" : "mailinputer error"}
        id="email"
        type="text"
        placeholder={isValidEmail ? 'abcd123@gmail.com' : "Please enter a valid email address"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setIsValidEmail(true);
        }}
      />
      <input className="continue" type="submit" value="Continue" />
    </form>
  );
}

export default Forgetpassword;