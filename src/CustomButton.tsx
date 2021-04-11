import React, { FC } from "react";
import styled from "styled-components";

type ButtonProps = {
  primary?: "primary";
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 0 0.25em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    transform: scale(1.05, 1.05);
  }
`;

type Props = {
  primary?: "primary";
  handleClick: () => void;
};

const CustomButton: FC<Props> = ({ primary, handleClick, children }) => {
  return (
    <Button primary={primary} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
