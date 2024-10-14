import React from "react";
import { styled } from "../styles/Theme";

const TextButton = ({ onClick, size, text: Text }) => {
  return <ButtonWrapper onClick={onClick}>

  </ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  z-index: 10;
  background-color: transparent;
  padding: 10px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default TextButton;
