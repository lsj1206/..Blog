import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//styles
import GlobalStyle from "./styles/GlobalStyles";
import ThemeProvider from "./context/ThemeProvider";
// import "github-markdown-css/github-markdown.css"; // 마크다운 스타일 (선택 사항)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
