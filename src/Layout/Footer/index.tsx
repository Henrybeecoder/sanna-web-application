import React from "react";
import Button from "../../component/Button";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>Are you ready</p>
      <p className="second-text">Let's get started</p>
      <div className="button-container">
        <Button color="primary">Explore Artist</Button>
      </div>
      <nav>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Featured</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className="copy-right">
        Copyright © 2021 Sanna. All rights reserved.
      </div>
    </div>
  );
}
