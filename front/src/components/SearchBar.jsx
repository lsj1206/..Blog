// Search Bar Component
import React, { useState } from "react";
import { styled } from "../styles/Theme";
// Assets
import { SearchIcon, XIcon } from "../assets/assets";
// Components
import IconButton from "../components/button/IconButton";

const SearchButton = ({ className }) => {
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);

  return (
    <SearchContainer className={className}>
      <SearchBar placeholder="Search..." autoFocus={isSearchBarOpen} $isOpen={isSearchBarOpen} />
      <ButtonContainer>
        <IconButton
          onClick={() => setSearchBarOpen((prev) => !prev)}
          size={[26, 26]}
          svgIcon={isSearchBarOpen ? XIcon : SearchIcon}
        />
      </ButtonContainer>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 300px;
  color: ${({ theme }) => theme.text};
`;

const ButtonContainer = styled.div`
  z-index: 10;
  align-items: center;
  position: absolute;
  right: 0;
`;

const SearchBar = styled.input.attrs({
  id: "search-bar", // 고유한 id 추가
  name: "searchQuery", // 고유한 name 추가
})`
  z-index: 9;
  flex: 1;
  padding-left: 15px;
  width: ${({ $isOpen }) => ($isOpen ? "100%" : "0")};
  height: 40px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bgSub};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  font-weight: bolder;
  outline: none;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
  transition: width 0.4s ease, opacity 0.4s ease;
  transition-timing-function: ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.bgText};
  }

  &:hover {
    cursor: text;
  }
`;

export default SearchButton;
