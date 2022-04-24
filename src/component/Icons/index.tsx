import React from "react";
import facebook from "../../Images/facebook.svg";
import twitter from "../../Images/twitter.svg";
import google from "../../Images/google.svg";
import "./style.css";

export default function Icons() {
  return (
    <div className="icons">
      <div className="icon-cover">
        <img src={facebook} alt="" />
      </div>
      <div className="icon-cover">
        <img src={twitter} alt="" />
      </div>
      <div className="icon-cover">
        <img src={google} alt="" />
      </div>
    </div>
  );
}
