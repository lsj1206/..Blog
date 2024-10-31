import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
//Style, Theme
import { styled } from "../styles/Theme";
import { ThemeContext } from "../context/ThemeProvider";
//Components
import SearchButton from "../components/SearchBar";
import TextButton from "../components/buttons/TextButton";
import ImgButton from "../components/buttons/ImgButton";
import IconButton from "../components/buttons/IconButton";
//Icons
import { ReactComponent as DarkIcon } from "../assets/icons/moon-regular.svg";
import { ReactComponent as LightIcon } from "../assets/icons/sun-regular.svg";
// Imgs
import ProfileImg from "../assets/profile.png";

const Header = () => {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const goWritePage = () => {
    navigate("/write");
  };

  // Home으로 이동
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>..Blog</HeaderTitle>
      <ButtonContainer>
        <SearchButton />
        <IconButton
          onClick={onChangeTheme}
          size={[30, 30]}
          svgIcon={theme === "light" ? LightIcon : DarkIcon}
        />
        <ImgButton size={[30, 30]} img={ProfileImg} onClick={() => {}} />
        <TextButton size={[80, 30]} text={"Write"} onClick={goWritePage} />
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
