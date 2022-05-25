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
      <ButtonDiv
        {...props}
        className="button"
        style={
          color === "primary"
            ? {
                background:
                  "linear-gradient(126deg, rgba(222,109,79,1) 0%, rgba(222,109,79,1) 58%, rgba(239,88,47,1) 60%)",
                border: "none",
              }
            : { background: "transperent" }
        }
      >
        {children}
      </ButtonDiv>
    </>
  );
};

export default Button;

const ButtonDiv = styled.button`
  /* Adapt the colors based on primary prop */
  width: 100%;
  color: white;
  background: ${(props) =>
    props.color === "primary"
      ? "linear-gradient(126deg, #f59324, #ef582f)"
      : "transparent"};
  border: ${(props) =>
    props.color === "primary" ? "transparent" : "1px solid white"};
`;
