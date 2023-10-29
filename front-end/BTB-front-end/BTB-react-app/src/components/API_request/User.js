import Config from "./Config";
import React, { useState, useEffect } from 'react';

// const [token, setToken] = useState('');
var token = null;

const setToken = (t) => {
    token = t;
}
function Users(json) {
    console.log(json,"json");
    if (json == ""|| json==null) return "null1st";

    // To remove the token from Local Storage and state
    if (json.login === "remove_Token") {
        setToken('');
        localStorage.removeItem('userToken');
    }
    else {
        const api_userToken = Config.baseURL + Config.auth_token_URL.url;

        // Load the token from Local Storage when the component mounts
        // useEffect(() => {
        //     const savedToken = localStorage.getItem('userToken');
        //     if (savedToken) {
        //         setToken(savedToken);
        //     }
        // }, []);

        // Make a POST request with the JSON data
        fetch(api_userToken, {
            method: Config.auth_token_URL.method,
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers if needed
            },
            body: JSON.stringify(json),
        })
            .then(response => {
                if (response.ok) {
                    // Request was successful
                    // console.log(response);
                    return response.json(); // If the API returns JSON data
                } else {
                    console.log('Request failed',response);
                    throw new Error('Request failed');
                    
                }
            })
            .then(data => {
                // Handle the API response data here
                // console.log('API response:', data);
                // Function to set the token in Local Storage and state
                if (data.status == "ok") {
                    setToken(data.auth_token);
                    // console.log("data.auth_token",data.auth_token);
                    localStorage.setItem('userToken', token);
                }
            })
            .catch(error => {
                // Handle errors here
                console.error('API request error:', error);
            });
    }

    if(token!=null || token!='') return "Ok";
    else return "error"
}

export default Users;