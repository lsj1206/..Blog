import React, { useState } from "react";
import { styled } from "../styles/Theme";

import IconButton from "../components/IconButton";
import { ReactComponent as SearchIcon } from "../assets/icons/magnifying-glass-solid.svg";
import { ReactComponent as XIcon } from "../assets/icons/xmark-solid.svg";

const SearchButton = () => {
  const [isSearchBarOpen, toggleSearchBarState] = useState(false);

  const handleSearchBar = () => {
    toggleSearchBarState((prevState) => !prevState);
  };

  return (
    <SearchContainer>
      <SearchBar
        isOpen={isSearchBarOpen}
        placeholder="Search..."
        autoFocus={isSearchBarOpen}
      />
      <ButtonContainer>
        <IconButton
          onClick={handleSearchBar}
          size={26}
          svgIcon={isSearchBarOpen ? XIcon : SearchIcon}
        />
      </ButtonContainer>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: 300px;
  display: flex;
  position: relative;
  align-items: center;
`;

const ButtonContainer = styled.div`
  z-index: 10;
  right: 0px;
  position: absolute;
  align-items: center;
`;

const SearchBar = styled.input`
  z-index: 9;
  flex: 1;
  width: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  height: 40px;
  padding-left: 15px;
  background: ${({ theme }) => theme.background3 || "currentColor"};
  color: ${({ theme }) => theme.text || "currentColor"};
  font-weight: bolder;
  outline: none;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: width 0.4s ease, opacity 0.4s ease;
  transition-timing-function: ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.bgText || "#aaa"};
  }

  &:hover {
    cursor: text;
  }
`;

export default SearchButton;
