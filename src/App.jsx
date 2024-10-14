import React from "react";
import { styled } from "./styles/Theme";

import Header from "./components/Header";

function App() {
  return (
    <Background>
      <Header />
    </Background>
  );
}

const Background = styled.div`
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.background1};
  color: ${({ theme }) => theme.text};
  transition: background 0.3s ease-in, color 0.3s ease-in;
`;

export default App;
