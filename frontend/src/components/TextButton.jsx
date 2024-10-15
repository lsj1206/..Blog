import React from "react";
import { styled } from "../styles/Theme";

const TextButton = ({ onClick, width, height, text }) => {
  return (
    <ButtonWrapper>
      <ButtonContainer onClick={onClick} width={width} height={height}>
        {text}
      </ButtonContainer>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  padding: 10px;
`;

const ButtonContainer = styled.button`
  z-index: 10;
  background-color: ${({ theme }) => theme.button1 || "currentColor"};
  padding: 8px 16px;
  width: ${({ width }) => (width ? width + "px" : "auto")};
  height: ${({ height }) => (height ? height + "px" : "auto")};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.btnText || "currentColor"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.9);
    background-color: ${({ theme }) => theme.button2 || "currentColor"};
  }
`;

export default TextButton;
