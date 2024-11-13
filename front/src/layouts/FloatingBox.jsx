// Main Footer
import React from "react";
import { styled } from "../styles/Theme";
// Assets
import { PageUpIcon, PageDownIcon } from "../assets/assets";
// Components
import IconButton from "../components/button/IconButton";

const FloatingBox = ({ className, scrollUp, scrollDown }) => {
  return (
    <FloatingContainer className={className}>
      <FloatingButton onClick={scrollDown} size={[30, 30]} svgIcon={PageDownIcon} />
      <FloatingButton onClick={scrollUp} size={[30, 30]} svgIcon={PageUpIcon} />
    </FloatingContainer>
  );
};

const FloatingContainer = styled.div`
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 200px;
  height: 50px;
  background-color: transparent;
`;

const FloatingButton = styled(IconButton)`
  background-color: blue;
`;

export default FloatingBox;
