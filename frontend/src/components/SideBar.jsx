import React, { useState, useEffect, useRef } from "react";
import { styled } from "../styles/Theme";
//Components
import IconButton from "./IconButton";
//Icons
import { ReactComponent as BarIcon } from "../assets/icons/bars-solid.svg";
import { ReactComponent as LightArrowIcon } from "../assets/icons/arrow-right-solid.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/github-brands-solid.svg";
import { ReactComponent as CodeIcon } from "../assets/icons/code-solid.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sbRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sbRef.current && !sbRef.current.contains(event.target)) {
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
    <SidebarContainer isOpen={isOpen} ref={sbRef}>
      <IconButton
        onClick={toggleSidebar}
        size={30}
        svgIcon={isOpen === false ? BarIcon : LightArrowIcon}
      />
      <ContentBox isOpen={isOpen} height={80} justify={"space-between"}>
        <h2>Box 1</h2>
        <IconBox>
          <IconButton
            link="https://github.com/lsj1206/..Blog"
            size={20}
            svgIcon={CodeIcon}
          />
          <IconButton
            link="https://github.com/lsj1206"
            size={20}
            svgIcon={GithubIcon}
          />
        </IconBox>
      </ContentBox>
      <Line isOpen={isOpen} />
      <ContentBox isOpen={isOpen} height={400}>
        <h2>Box 2</h2>
        <p>Some content in Box 2...</p>
      </ContentBox>
    </SidebarContainer>
  );
};

const IconBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const SidebarContainer = styled.div`
  top: 90px;
  right: 0;
  width: ${(props) => (props.isOpen ? "250px" : "50px")};
  height: 80vh;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: ${({ theme }) => theme.background2};
  color: white;
  position: fixed;
  overflow: hidden;
  transition: width 0.3s ease;
`;

const Line = styled.div`
  margin: 10px 10px 10px 15px;
  height: 1px;
  background-color: #777;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

const ContentBox = styled.div`
  height: ${({ height }) => (height ? height + "px" : "auto")};
  padding: 5px 5px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify = "flex-start" }) => justify};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0; /* 스크롤바의 너비를 0으로 설정 */
    background: transparent; /* 배경 투명하게 설정 */
  }
`;

export default Sidebar;
