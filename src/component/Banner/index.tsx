import React from "react";
import "./style.css";
import Button from "../Button";

export default function Bannner() {
  return (
    <div className="banner">
      <h1>There’s no place like home</h1>
      <p>There’s no place like home</p>
      <div className="searchHolder">
        <input type="text" />
        <div className="button-holder">
          <Button color="primary" style={{ padding: "40px 0" }}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
