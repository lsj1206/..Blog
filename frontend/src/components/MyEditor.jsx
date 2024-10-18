// Custom Toast UI Editor
import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

const MyEditor = () => {
  const editorRef = useRef();

  return (
    <Editor
      ref={editorRef}
      initialEditType="wysiwyg" // WYSIWYG 편집 모드
      height="500px" // 에디터 높이
      plugins={[codeSyntaxHighlight, colorSyntax]} // 설치한 플러그인 추가
    />
  );
};

export default MyEditor;
