import React from "react";
import { styled } from "../styles/Theme";

const TextButton = ({ onClick, width, height, text: Text }) => {
  return <ButtonWrapper onClick={onClick}>{Text}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  z-index: 10;
  background-color: ${({ theme }) => theme.button1 || "currentColor"};
  padding: 8px 16px;
  width: ${({ width }) => width + "px" || "auto"};
  height: ${({ height }) => height + "px" || "auto"};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.button2 || "currentColor"};
  }
  &:active {
    transform: scale(0.95);
    background-color: ${({ theme }) => theme.button2 || "currentColor"};
  }
`;

export default TextButton;
