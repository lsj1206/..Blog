import React from "react";
import { styled } from "../../styles/Theme";

const ImgButton = ({ className, onClick, size = [30, 30], img, link }) => {
  // 링크가 존재할 경우 해당 URL로 리디렉션
  const handleClick = (e) => {
    if (link) {
      window.open(link, "_blank"); // 리디렉션할때 New Tab
    } else if (onClick) {
      onClick(e);
    }
  };

  return (
    <ButtonContainer className={className} onClick={handleClick} width={size[0]} height={size[1]}>
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
