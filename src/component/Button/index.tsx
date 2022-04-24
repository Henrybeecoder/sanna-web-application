import React from "react";
import styled from "styled-components";
import "./style.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "secondary" | "grey";
}

const Button = ({
  color,
  children,
  ...props
}: React.PropsWithChildren<Props>) => {
  return (
    <>
      <ButtonDiv {...props} className="button">
        {children}
      </ButtonDiv>
    </>
  );
};

export default Button;

const ButtonDiv = styled.button`
  /* Adapt the colors based on primary prop */
  background: rgb(0, 0, 0);
  background: linear-gradient(
    126deg,
    #F59324,
    #EF582F
  );
  color: white
  width: 100%;
 
`;
