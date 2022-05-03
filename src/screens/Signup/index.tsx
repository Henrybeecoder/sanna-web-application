import React from "react";
import "./style.css";
import AuthLayout from "../../Layout/AuthLayout";
import SignupForm from "../../Forms/SignupForm";

export default function SignupScreen() {
  return (
    <div>
      <AuthLayout
        headerText="Signup"
        subText="Sign Up to Sanna account to start aexploring artworks from artists across Africa"
        Image="https://res.cloudinary.com/henrybee558/image/upload/v1649683091/sanna/sanna_pic_xb7crv.svg"
      >
        <SignupForm />
      </AuthLayout>
    </div>
  );
}
