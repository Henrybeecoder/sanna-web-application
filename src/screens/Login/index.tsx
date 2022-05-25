//@ts-nocheck
import React from "react";
import "./style.css";
import AuthLayout from "../../Layout/AuthLayout";
import LoginForm from "../../Forms/LoginForm";
import sannaLoginImg from "../../Images/sanna_login.svg";

export default function LoginScreen() {
  return (
    <div>
      <AuthLayout
        headerText="Login"
        subText="Login to Sanna account to start exploring artworks from artists across Africa"
        Image={sannaLoginImg}
      >
        <LoginForm />
      </AuthLayout>
    </div>
  );
}
