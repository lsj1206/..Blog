// Main Header
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";
import { styled } from "../styles/Theme";
// Assets
import { LightIcon, DarkIcon, ProfileImg } from "../assets/assets";
// Components
import SearchButton from "../components/SearchBar";
import TextButton from "../components/button/TextButton";
import ImgButton from "../components/button/ImgButton";
import IconButton from "../components/button/IconButton";

const Header = ({ className }) => {
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
    <HeaderContainer className={className}>
      <HeaderTitle onClick={handleLogoClick}>{"[...Logs]"}</HeaderTitle>
      <ButtonContainer>
        <SearchButton />
        <IconButton size={[30, 30]} svgIcon={theme === "light" ? LightIcon : DarkIcon} onClick={onChangeTheme} />
        <TextButton size={[110, 30]} text={"글 작성하기"} onClick={goWritePage} />
      </ButtonContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
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
