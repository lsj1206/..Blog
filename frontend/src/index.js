import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//styles
import GlobalStyle from "./styles/GlobalStyles";
import ThemeProvider from "./context/ThemeProvider";
// Toast UI Editor CSS
// import "github-markdown-css/github-markdown.css"; // 마크다운 스타일 (선택 사항)
import "@toast-ui/editor/dist/toastui-editor.css"; // TOAST UI Editor 기본 CSS
import "@toast-ui/editor/dist/toastui-editor-viewer.css"; // TOAST UI Editor 뷰어 CSS (필요 시)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
