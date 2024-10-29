// Custom Toast UI Editor
import React, { useContext, useRef, useEffect } from "react";
import { styled } from "../styles/Theme";
import { ThemeContext } from "../context/ThemeProvider";
// TOAST UI Editor
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/i18n/ko-kr"; // language
import "@toast-ui/editor/dist/toastui-editor.css"; // default css
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"; // dark mode css
import CodeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all"; // 'code syntax highlight' plugin
import Prism from "prismjs"; // prismjs , dependency'code syntax highlight'
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css"; // 'code syntax highlight' css
import "prismjs/themes/prism.css"; // prism CSS, dependency'code syntax highlight'
import ColorSyntax from "@toast-ui/editor-plugin-color-syntax"; // 'color syntax' plugin
import "tui-color-picker/dist/tui-color-picker.css"; // 'color syntax' css

const MyEditor = ({ size = [0, 400], setContent }) => {
  const { theme } = useContext(ThemeContext);
  const editorRef = useRef();

  const handleImg = (blob, callback) => {
    console.log(blob); // 업로드된 이미지의 Blob 데이터
    console.log(callback);
    // 이미지 업로드 로직을 여기에서 구현
  };

  // 에디터의 현재 내용(Markdown)을 상위 컴포넌트로 전달
  const onChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    setContent(data);
  };

  // initialValue 대체.
  useEffect(() => {
    const instance = editorRef.current.getInstance();
    instance.setMarkdown("");
  }, []);

  return (
    <EditorContainer
      className={`editor-panel-editor${
        theme === "dark" ? " toastui-editor-dark" : ""
      }`}
      // width={size[0]}
      height={size[1]}
    >
      <Editor
        height="100%"
        language="ko-KR"
        initialEditType="markdown"
        placeholder="내용을 입력해 주세요."
        previewStyle="vertical"
        hideModeSwitch={true}
        plugins={[[CodeSyntaxHighlight, { highlighter: Prism }], ColorSyntax]}
        hooks={{ addImageBlobHook: handleImg }}
        onChange={onChange}
        ref={editorRef}
      />
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  /* width: ${({ width }) => width}px; */
  height: ${({ height }) => height}px;
`;

export default MyEditor;
