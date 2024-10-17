import React from "react";
import { styled } from "../../styles/Theme";
//Components
import IconButton from "../buttons/IconButton";
// Icons
import { ReactComponent as PageUpIcon } from "../../assets/icons/caret-up-solid.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 스크롤
    });
  };

  return (
    <FooterContainer>
      <IconButton onClick={scrollToTop} size={32} svgIcon={PageUpIcon} />
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-bottom: -5px;
  margin-right: -5px;
  padding: 0;
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: transparent;
`;

export default Footer;
