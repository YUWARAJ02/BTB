// Loginbutton.js
import { useRef, useState } from "react";
import "./Loginbutton.css";
import Login from './Loginsignup';
import LogIn from "./LogIn";
import { useEffect } from 'react';


const Loginbutton = () => {
  const [loginpop, setLoginpop] = useState(false);
  
  const refone = useRef(null)

  useEffect(() => {
    document.addEventListener("click", handleClick, true)
  })
  const handleClick = (e) => {
    if (!refone.current.contains(e.target)) {
      setLoginpop(false);
    } 
  }
  return (
    <div ref={refone}>
      <button className="log-in-button-child" onClick={() => {
        setLoginpop(!loginpop);
        }}>
        <LogIn />
      </button>

      {loginpop && <Login />}
      </div>
  );
};

export default Loginbutton;
