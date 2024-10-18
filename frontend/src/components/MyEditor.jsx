// Custom Toast UI Editor
import React, { useRef } from "react";
import { styled } from "../styles/Theme";
// TOAST UI Editor import
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/i18n/ko-kr"; // language
import codeHighlight from "@toast-ui/editor-plugin-code-syntax-highlight"; // 'code syntax highlight' plugin
import color from "@toast-ui/editor-plugin-color-syntax"; // 'color syntax' plugin
// TOAST UI Editor CSS
import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

const MyEditor = ({ height }) => {
  const editorRef = useRef();

  const handleImg = (blob, callback) => {
    console.log(blob); // 업로드된 이미지의 Blob 데이터
    console.log(callback); // 콜백 함수
    // 이미지 업로드 로직을 여기에서 구현
  };

  return (
    <EditorContainer>
      <Editor
        language="ko-KR"
        plugins={[codeHighlight, color]}
        hooks={{ addImageBlobHook: handleImg }}
        ref={editorRef}
        initialEditType="markdown"
        initialValue="Default Type Markdown"
        placeholder="내용을 입력해 주세요."
        previewStyle="vertical"
        height={`${height}px`}
        theme="dark"
      />
    </EditorContainer>
  );
};

const EditorContainer = styled.div``;

export default MyEditor;
