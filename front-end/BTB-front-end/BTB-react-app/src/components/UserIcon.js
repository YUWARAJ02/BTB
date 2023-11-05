import React, { useState, useEffect } from 'react';
import "./UserIcon.css"
const UserIcon = () => {
    const [randomColor, setRandomColor] = useState('');
    const [randomLetter, setRandomLetter] = useState('');
    
    useEffect(() => {
        const generateRandomColor = () => {
          return '#' + Math.floor(Math.random()*16777215).toString(16);
        };
    
        const generateRandomLetter = () => {
          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        };
    
        const color = generateRandomColor();
        const letter = generateRandomLetter();
    
        setRandomColor(color);
        setRandomLetter(letter);
      }, []);

      return (
        <div className='randomletter'>{randomLetter}</div>
      )
};

export default UserIcon;
