// DropDown IconButton
import React, { useState, useRef, useEffect } from "react";
import { styled } from "../../styles/Theme";
// Components
import IconButton from "./IconButton";

const DDIconButton = ({ className, onClick, size = [30, 30], DDList, svgIcon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // 드롭다운 토글
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <DropDownContainer className={className} ref={menuRef}>
      <IconButton size={size} onClick={toggleMenu} svgIcon={svgIcon} />
      {isOpen && (
        <DropdownList size={size}>
          {DDList.map((item, index) => (
            <DropdownItem
              key={index}
              onClick={() => {
                onClick(item);
                setIsOpen(false);
              }}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  position: relative;
`;

const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  position: absolute;
  top: ${({ size }) => size[1] + 10}px;
  right: 10px;
  background-color: ${({ theme }) => theme.btn};
  color: ${({ theme }) => theme.btnText};
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.div`
  padding: 8px 16px;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.btnActive};
    color: ${({ theme }) => theme.btnActiveText};
  }
`;

export default DDIconButton;
