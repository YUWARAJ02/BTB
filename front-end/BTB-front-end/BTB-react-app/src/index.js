import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
  
   <Auth0Provider
    domain="dev-4y2n8glj6mumo7r7.us.auth0.com"
    clientId="0Vm7d5ZBzCTz3Yu5bCxiTq2zKwffWVwG"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
