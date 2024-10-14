import React, { useContext } from "react";
//Style, Theme
import { styled } from "../styles/Theme";
import { ThemeContext } from "../context/ThemeProvider";
//Components
import SearchButton from "./SearchButton";
import TextButton from "./TextButton";
import IconButton from "./IconButton";
//Icon
import { ReactComponent as DarkIcon } from "../assets/icons/moon-regular.svg";
import { ReactComponent as LightIcon } from "../assets/icons/sun-regular.svg";

const Header = () => {
  const { theme, onChangeTheme } = useContext(ThemeContext);

  // Home으로 이동
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>..Blog</HeaderTitle>
      <ButtonContainer>
        <SearchButton />
        <IconButton
          onClick={onChangeTheme}
          size={30}
          svgIcon={theme === "light" ? LightIcon : DarkIcon}
        />
        <TextButton onClick={() => {}} width={30} height={50} text={"Login"} />
      </ButtonContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.background2};
`;

const HeaderTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export default Header;
