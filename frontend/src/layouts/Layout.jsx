import React from "react";
import { Outlet } from "react-router-dom"; // React Router의 Outlet 사용
import { styled } from "../styles/Theme";

import Header from "./Header";
import Sidebar from "./SideBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Background>
      <Header />
      <Sidebar />
      <Outlet />
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
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bgMain};
  transition: background 0.3s ease-in, color 0.3s ease-in;
`;

export default Layout;
