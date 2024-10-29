// Custom Toast UI Viewer
import React, { useContext } from "react";
import { styled } from "../styles/Theme";
import { ThemeContext } from "../context/ThemeProvider";
// TOAST UI Editor
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css"; // default CSS
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"; // 다크 모드 테마
import CodeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all"; // 'code syntax highlight' plugin
import Prism from "prismjs"; // prismjs , dependency'code syntax highlight'
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css"; // 'code syntax highlight' css
import "prismjs/themes/prism.css"; // prism CSS, dependency'code syntax highlight'

const MyViewer = ({ Content }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ViewerContainer
      className={`editor-panel-editor${
        theme === "dark" ? " toastui-editor-dark" : ""
      }`}
    >
      <Viewer
        initialValue={Content || ""}
        plugins={[[CodeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </ViewerContainer>
  );
};

const ViewerContainer = styled.div``;

export default MyViewer;
