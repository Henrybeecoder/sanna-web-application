import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./screens/ForgotPassword";
import SignupScreen from "./screens/Signup";
import LoginScreen from "./screens/Login";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="signup" element={<SignupScreen />} />
      <Route path="login" element={<LoginScreen />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
