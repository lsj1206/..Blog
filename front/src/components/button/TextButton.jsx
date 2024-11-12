// Text Button Component
import React from "react";
import { styled } from "../../styles/Theme";

const TextButton = ({ className, onClick, size = [80, 30], text }) => {
  return (
    <ButtonContainer className={className} onClick={onClick} width={size[0]} height={size[1]}>
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
  padding: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: ${({ theme }) => theme.btnText};
  background-color: ${({ theme }) => theme.btn};
  font-size: 0.9rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
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
