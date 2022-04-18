import React from "react";
import "./style.css";
import AuthLayout from "../../Layout/AuthLayout";
import LoginForm from "../../Forms/LoginForm";

export default function LoginScreen() {
  return (
    <div>
      <AuthLayout
        headerText="Login"
        subText="Login to Sanna account to start exploring artworks from artists across Africa"
        Image="https://res.cloudinary.com/henrybee558/image/upload/v1649684615/sanna/sanna_login_pamh4m.svg"
      >
        <LoginForm />
      </AuthLayout>
    </div>
  );
}
