import React from "react";
import Button from "../../component/Button";
import logo from "../../Images/logo.svg";
import "./style.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="body">
        <div className="nav">
          <ul>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Blog</li>
            <li>Artists</li>
            <li>Carts</li>
          </ul>
        </div>
        <div className="buttons">
          <p>Login</p>
          <div className="button-wrapper">
            <Button color="secondary">signup</Button>
          </div>
        </div>
      </div>
      <div className="hambuger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}
