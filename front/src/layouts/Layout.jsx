// Layout
import React, { useRef } from "react";
import { Outlet } from "react-router-dom"; // React Router의 Outlet 사용
import { styled } from "../styles/Theme";
// Components
import Header from "./Header";
import Sidebar from "./SideBar";
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

  return (
    <Background ref={backgroundRef}>
      <Header />
      <Sidebar />
      <OutletBox>
        <Outlet />
      </OutletBox>
      <Footer scrollUp={scrollUp} />
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
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bgMain};
  transition: background 0.3s ease-in, color 0.3s ease-in;
  overflow-y: scroll; // 스크롤 활성화
  scrollbar-width: none; // Firefox에서 스크롤바 숨김
  -ms-overflow-style: none; // IE 및 Edge에서 스크롤바 숨김

  &::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera에서 스크롤바 숨김
  }
`;

const OutletBox = styled.div``;

export default Layout;
