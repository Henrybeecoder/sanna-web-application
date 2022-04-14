import React, { useState } from "react";
import "./style.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import Input, { InputProps } from "../../component/Input";
import Button from "../../component/Button";
import { Eye } from "react-feather";

export default function LoginForm() {
  const formFields: InputProps[] = [
    {
      type: "email",
      placeholder: "Enter email",
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
                label={field.label}
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
                adornment={field.type === "password" ? <Eye /> : undefined}
                adornmentAlt="eye"
                onAdornmentClick={togglePassword}
              />
            </div>
          ))}
          <div className="group">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/resetpassword">Forgot Password?</a>
          </div>

          <Button type="submit" color="primary">
            Sign in
          </Button>
          <p className="link">
            Dont have an account?{" "}
            <a href="/signup">
              <strong>Sign Up</strong>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
