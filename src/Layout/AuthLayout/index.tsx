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
        <Title>{headerText}</Title>
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

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #ef582f;
`;
