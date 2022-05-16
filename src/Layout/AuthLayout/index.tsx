import React, { useEffect } from "react";
import "./style.css";

interface ChildProps {
  headerText: string;
  subText: string;
  image: string;
  inputImage: HTMLImageElement;
}

const AuthLayout = ({
  children,
  headerText,
  subText,
  image,
  inputImage,
}: React.PropsWithChildren<ChildProps>) => {
  return (
    <div className="wrapper">
      <div className="text_div">
        <h1>{headerText}</h1>
        <p className="subText">{subText}</p>
        {children}
      </div>
      <div className="image_div">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default AuthLayout;
