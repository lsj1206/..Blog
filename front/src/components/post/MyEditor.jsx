// Custom Toast UI Editor
import React, { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { styled } from "../../styles/Theme";
// TOAST UI Editor
import { Editor } from "@toast-ui/react-editor";
import CodeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all"; // 'code syntax highlight' plugin
import Prism from "prismjs"; // prismjs , dependency'code syntax highlight'
import ColorSyntax from "@toast-ui/editor-plugin-color-syntax"; // 'color syntax' plugin
import "@toast-ui/editor/dist/i18n/ko-kr"; // language
// TOAST UI Editor CSS
import "@toast-ui/editor/dist/toastui-editor.css"; // default css
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"; // dark mode css
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css"; // 'code syntax highlight' css
import "prismjs/themes/prism.css"; // prism CSS, dependency'code syntax highlight'
import "tui-color-picker/dist/tui-color-picker.css"; // 'color syntax' css

const MyEditor = ({ size = [0, 400], setContent, addImage }) => {
  const { theme } = useContext(ThemeContext);
  const editorRef = useRef();

  // initialValue 대체 기능
  useEffect(() => {
    editorRef.current.getInstance().setMarkdown("");
  }, []);

  // Content(Markdown)를 수시로 상위 컴포넌트로 전달
  const onChange = () => {
    const contents = editorRef.current.getInstance().getMarkdown();
    setContent(contents);
    console.log(contents);
  };

  // 미리보기 이미지 표시 안되는 문제
  // <img> 태그의 src에 주소가 담기지 않음. (위지윅 모드에선 정상적임)
  const onUploadImage = (blob, callback) => {
    console.log(blob);
    const previewUrl = URL.createObjectURL(blob);
    addImage(blob);
    callback(previewUrl, "미리보기");
  };

  return (
    <EditorContainer
      className={`editor-panel-editor${theme === "dark" ? " toastui-editor-dark" : ""}`}
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
        hooks={{ addImageBlobHook: onUploadImage }}
        onChange={onChange}
        ref={editorRef}
      />
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  height: ${({ height }) => height}px;
`;

export default MyEditor;
