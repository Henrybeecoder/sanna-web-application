import React from "react";
import styled from "styled-components";

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
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 62%,
    rgba(222, 109, 79, 1) 63%
  );
  color: white

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
