import React from "react";
import Button from "../../component/Button";
import logo from "../../Images/logo.svg";
import "./style.css";
import { Link } from "react-router-dom";

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
          <Link to="/login">
            <p>Login</p>
          </Link>

          <div className="button-wrapper">
            <Link to="/signup">
              <Button color="secondary">signup</Button>
            </Link>
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
