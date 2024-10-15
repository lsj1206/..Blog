import React from "react";
import { styled } from "../styles/Theme";
//Components
import IconButton from "./IconButton";
// Icons
import { ReactComponent as PageUpIcon } from "../assets/icons/caret-up-solid.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <IconButton onClick={() => {}} size={32} svgIcon={PageUpIcon} />
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  bottom: 0;
  width: 100vw;
  padding: 0;
  margin-bottom: -5px;
  margin-right: -5px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  background-color: transparent;
`;

export default Footer;
