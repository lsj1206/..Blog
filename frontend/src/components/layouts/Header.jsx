import React, { useContext } from "react";
//Style, Theme
import { styled } from "../../styles/Theme";
import { ThemeContext } from "../../context/ThemeProvider";
//Components
import SearchButton from "../SearchBar";
import TextButton from "../buttons/TextButton";
import ImgButton from "../buttons/ImgButton";
import IconButton from "../buttons/IconButton";
//Icons
import { ReactComponent as DarkIcon } from "../../assets/icons/moon-regular.svg";
import { ReactComponent as LightIcon } from "../../assets/icons/sun-regular.svg";
// Imgs
import ProfileImg from "../../assets/profile.png";

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
        {/* 로그인 정보가 없으면 이미지 블락 , Login Button */}
        <ImgButton onClick={() => {}} size={30} img={ProfileImg} />
        <TextButton onClick={() => {}} width={80} height={30} text={"Login"} />
      </ButtonContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.bgLayout};
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
