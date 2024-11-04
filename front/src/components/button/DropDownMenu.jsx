// DropdownMenu
import React, { useState } from "react";
import { styled } from "../../styles/Theme";

const DropdownMenu = ({ className, menulist, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(placeholder);

  const toggleOpen = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer className={className}>
      <DropdownLabel onClick={toggleOpen}>{selected}</DropdownLabel>
      <DropdownList $isOpen={isOpen}>
        {menulist.map((item, index) => (
          <DropdownItem key={index} onClick={() => handleSelect(item)}>
            {item}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  z-index: 10;
  position: relative;
  font-size: 14px;
`;

const DropdownLabel = styled.span`
  display: block;
  padding: 6px 12px;
  background: ${({ theme }) => theme.bgLayout};
  color: ${({ theme }) => theme.btnText};
  outline: none;
  border: 1px solid ${({ theme }) => theme.brLine};
  border-radius: 6px;
  transition: all 0.3s ease;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: absolute;
  top: 42px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.bgLayout};
  outline: none;
  border-radius: 6px;
  list-style: none;
`;

const DropdownItem = styled.li`
  padding: 6px 12px;
  color: ${({ theme }) => theme.btnText};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.btnActive};
    color: ${({ theme }) => theme.btnActiveText};
  }
`;

export default DropdownMenu;
