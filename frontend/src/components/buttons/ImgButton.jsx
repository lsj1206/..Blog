import React from "react";
import { styled } from "../../styles/Theme";

const ImgButton = ({ onClick, size, img }) => {
  return (
    <ButtonContainer onClick={onClick} size={size}>
      <img src={img} alt={"_image"} width={size} height={size} />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  z-index: 10;
  padding: 10px;
  background: none;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.1s;
  width: ${({ size }) => size || "40px"};
  height: ${({ size }) => size || "40px"};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default ImgButton;
