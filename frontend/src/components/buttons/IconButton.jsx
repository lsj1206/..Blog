import React from "react";
import { styled } from "../../styles/Theme";

const IconButton = ({ onClick, link, size, svgIcon: SvgIcon }) => {
  // 링크가 존재할 경우 해당 URL로 리디렉션
  const handleClick = (e) => {
    if (link) {
      window.open(link, "_blank"); // 새로운 탭으로 링크 열기
    } else if (onClick) {
      onClick(e); // onClick 함수가 있으면 실행
    }
  };

  return (
    <ButtonContainer onClick={handleClick}>
      <IconContainer size={size}>
        <SvgIcon />
      </IconContainer>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  z-index: 10;
  background-color: transparent;
  padding: 10px;
  border: none;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;

  &:active {
    transform: scale(0.95);
  }
`;

const IconContainer = styled.div`
  width: ${({ size }) => size + "px" || "24px"};
  height: ${({ size }) => size + "px" || "24px"};
  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.button1 || "currentColor"};
  }

  ${ButtonContainer}:hover & {
    svg {
      fill: ${({ theme }) => theme.button2}; // hover
    }
  }
`;

export default IconButton;
