import React from "react";
import styled from "styled-components";
import "./style.css";

interface ChildProps {
  headerText: string;
  subText: string;
  Image: string;
}

const AuthLayout = ({
  children,
  headerText,
  subText,
  Image,
}: React.PropsWithChildren<ChildProps>) => {
  return (
    <div className="wrapper">
      <div className="text_div">
        <h1>{headerText}</h1>
        <h3 className="subText">{subText}</h3>
        {children}
      </div>
      <div className="image_div">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default AuthLayout;
