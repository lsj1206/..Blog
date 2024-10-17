import React from "react";
import { styled } from "../../styles/Theme";

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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  color: ${({ theme }) => theme.btnText};
  background-color: ${({ theme }) => theme.btn};
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  transition: background-color 0.2s, transform 0.2s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.btnActiveText};
    background-color: ${({ theme }) => theme.btnActive};
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default TextButton;
