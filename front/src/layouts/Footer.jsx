// Main Footer
import React from "react";
import { styled } from "../styles/Theme";
// Assets
import {} from "../assets/assets";
// Components

const Footer = ({ className }) => {
  return (
    <FooterContainer className={className}>
      <></>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bgLayout};
`;

export default Footer;
