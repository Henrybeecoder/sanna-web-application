// @ts-ignore
// @ts-nocheck
import React, { useEffect } from "react";
import "./style.css";

interface ChildProps {
  headerText: string;
  subText: string;
  Image: HTMLImageElement;
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
        <p className="subText">{subText}</p>
        {children}
      </div>
      <div className="image_div">
        {/*ts-ignore */}

        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default AuthLayout;
