// Main Sidebar
import React, { useState, useEffect, useRef } from "react";
import { styled } from "../styles/Theme";
// Assets
import { BarIcon, LightArrowIcon } from "../assets/assets";
import { ProfileImg } from "../assets/assets";
// Components
import IconButton from "../components/button/IconButton";
import ImgButton from "../components/button/ImgButton";

const Sidebar = ({ className }) => {
  const [$isOpen, setIsOpen] = useState(false);
  const sideBarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!$isOpen);
  };
  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SidebarContainer className={className} ref={sideBarRef} $isOpen={$isOpen}>
      <IconButton size={[30, 30]} svgIcon={$isOpen === false ? BarIcon : LightArrowIcon} onClick={toggleSidebar} />
      <ProfileBox $isOpen={$isOpen}>
        <ImgButton size={[50, 50]} img={ProfileImg} />
        <InfoBox>
          <h3>{"Profile Name"}</h3>
          <p>{"권한 : 관리자"}</p>
        </InfoBox>
      </ProfileBox>
      <Line $isOpen={$isOpen} />
      <ContentBox $isOpen={$isOpen}>
        <h2>Box 2</h2>
        <p>Some content in Box 2...</p>
      </ContentBox>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  z-index: 100;
  position: fixed;
  top: 10vh;
  right: 0;
  width: ${(props) => (props.$isOpen ? "350px" : "50px")};
  height: 80vh;
  box-sizing: border-box;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgLayout};
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  overflow: hidden;
  transition: width 0.3s ease;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  padding: 5px 5px 5px 15px;
  height: 80px;
  box-sizing: border-box;
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
`;

const InfoBox = styled.div``;

const Line = styled.div`
  margin: 10px 10px 10px 15px;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5px 5px 5px 15px;
  height: 400px;
  box-sizing: border-box;
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0; /* 스크롤바의 너비를 0으로 설정 */
    background: transparent; /* 배경 투명하게 설정 */
  }
`;

export default Sidebar;
