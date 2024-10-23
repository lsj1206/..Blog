import React from "react";
import { styled } from "../../styles/Theme";

const TextButton = ({ size = [80, 30], text, onClick }) => {
  const [width, height] = size;

  return (
    <ButtonContainer width={width} height={height} onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
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
