import React, { useState } from "react";
import "./style.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import Input, { InputProps } from "../../component/Input";
import Button from "../../component/Button";
import { Link } from "react-router-dom";
import Icons from "../../component/Icons";

export default function SignupForm() {
  const formFields: InputProps[] = [
    {
      type: "email",
      placeholder: "Email Address",
      label: "Email",
      name: "email",
    },
    {
      type: "password",
      placeholder: "Password",
      label: "Password",
      name: "password",
    },
  ];

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Must be valid email")
      .required("Must be valid email"),
    password: Yup.string()
      .min(8, "Password cannot be less than 8 characters")
      .required("Password cannot be empty"),
  });

  const formik = useFormik({
    validationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [visible, setVisible] = useState(false);

  const togglePassword = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form">
          {formFields.map((field) => (
            <div key={field.name}>
              <Input
                type={visible ? "text" : field.type}
                styleName="input"
                placeholder={field.placeholder}
                name={field.name}
                value={formik.values[`${field.name}`]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors[`${field.name}`] &&
                  formik.touched[`${field.name}`]
                    ? formik.errors[`${field.name}`]
                    : null
                }
                // adornment={field.type === "password" ? <Eye /> : undefined}
                // adornmentAlt="eye"
                onAdornmentClick={togglePassword}
              />
            </div>
          ))}
          <div className="group">
            <label>
              <input type="checkbox" /> <p>Remember me</p>
            </label>
            <Link to="forgot-password">Forgot Password?</Link>
          </div>

          <Button type="submit" color="primary">
            Sign in
          </Button>
          <p className="link">
            Dont have an account?{" "}
            <Link to="/signup">
              <strong>Sign Up</strong>
            </Link>
          </p>
        </div>
      </form>
      <Icons />
    </div>
  );
}
