import React from "react";
import { styled } from "../../styles/Theme";

const ImgButton = ({ onClick, size = [30, 30], img }) => {
  const [width, height] = size;

  return (
    <ButtonContainer width={width} height={height} onClick={onClick}>
      <img src={img} alt={"_image"} />
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
  background: none;
  border: none;
  border-radius: 50%;
  transition: transform 0.2s, opacity 0.2s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
      opacity: 0.75;
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default ImgButton;
