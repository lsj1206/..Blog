import React from "react";
import { styled } from "../../styles/Theme";

const IconButton = ({ onClick, link, size, svgIcon: SvgIcon }) => {
  // 링크가 존재할 경우 해당 URL로 리디렉션
  const handleClick = (e) => {
    if (link) {
      window.open(link, "_blank"); // 리디렉션할때 New Tab
    } else if (onClick) {
      onClick(e); // if onClick true
    }
  };

  return (
    <ButtonWrapper>
      <ButtonContainer onClick={handleClick}>
        <IconContainer $size={size}>
          <SvgIcon />
        </IconContainer>
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
  background-color: transparent;
  border: none;
  border-radius: 50%;
  transition: background-color 0.2s, transform 0.2s;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const IconContainer = styled.div`
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.btn};
  }

  ${ButtonContainer}:hover & {
    svg {
      fill: ${({ theme }) => theme.btnActive}; // hover
    }
  }
`;

export default IconButton;
