// Layout
import React, { useRef } from "react";
import { Outlet } from "react-router-dom"; // React Router의 Outlet 사용
import { styled } from "../styles/Theme";
// Components
import Header from "./Header";
import Sidebar from "./SideBar";
import FloatingBox from "./FloatingBox";
import Footer from "./Footer";

const Layout = () => {
  const backgroundRef = useRef(null);

  const scrollUp = () => {
    if (backgroundRef.current) {
      backgroundRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const scrollDown = () => {
    if (backgroundRef.current) {
      backgroundRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Background ref={backgroundRef}>
      <Header />
      <Sidebar />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <FloatingBox scrollUp={scrollUp} scrollDown={scrollDown} />
      <Footer />
    </Background>
  );
};

const Background = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100%;
  max-height: 100%;
  background: ${({ theme }) => theme.bgMain};
  overflow-y: scroll; // 스크롤 활성화
  scrollbar-width: none; // Firefox에서 스크롤바 숨김
  -ms-overflow-style: none; // IE 및 Edge에서 스크롤바 숨김
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera에서 스크롤바 숨김
  }
`;

const PageContainer = styled.div`
  margin-left: 100px;
  width: 100vw;
`;

export default Layout;
