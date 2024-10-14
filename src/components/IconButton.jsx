import React from "react";
import { styled } from "../styles/Theme"; // styled-components를 Theme.jsx에서 가져옴

const IconButton = ({ onClick, size, svgIcon: SvgIcon }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <SvgIconContainer size={size}>
        <SvgIcon />
      </SvgIconContainer>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  z-index: 10;
  background-color: transparent;
  padding: 10px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SvgIconContainer = styled.div`
  width: ${({ size }) => size + "px" || "24px"};
  height: ${({ size }) => size + "px" || "24px"};
  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.button1 || "currentColor"};
  }

  ${ButtonWrapper}:hover & {
    svg {
      fill: ${({ theme }) => theme.button2}; // hover
    }
  }
`;

export default IconButton;
