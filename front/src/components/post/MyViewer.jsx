// Custom Toast UI Viewer
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { styled } from "../../styles/Theme";
// TOAST UI Editor
import { Viewer } from "@toast-ui/react-editor";
import CodeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all"; // 'code syntax highlight' plugin
import Prism from "prismjs"; // prismjs , dependency'code syntax highlight'
// TOAST UI Editor CSS
import "@toast-ui/editor/dist/toastui-editor-viewer.css"; // default css
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"; // dark mode css
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css"; // 'code syntax highlight' css
import "prismjs/themes/prism.css"; // prism css, dependency'code syntax highlight'

const MyViewer = ({ Content }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ViewerContainer className={`editor-panel-editor${theme === "dark" ? " toastui-editor-dark" : ""}`}>
      <Viewer initialValue={Content} plugins={[[CodeSyntaxHighlight, { highlighter: Prism }]]} />
    </ViewerContainer>
  );
};

const ViewerContainer = styled.div`
  width: 1200px;
  .toastui-editor-contents h1 {
    font-size: 2rem;
  }
  .toastui-editor-contents h2 {
    font-size: 1.5rem;
  }
  .toastui-editor-contents h3 {
    font-size: 1.25rem;
  }
  .toastui-editor-contents h4 {
    font-size: 1rem;
  }
  .toastui-editor-contents h5 {
    font-size: 0.8125rem;
  }
  .toastui-editor-contents h6 {
    font-size: 0.625rem;
  }
  .toastui-editor-contents p {
    font-size: 1rem;
  }
  .toastui-editor-contents pre {
    font-size: 1rem;
  }
`;

export default MyViewer;
