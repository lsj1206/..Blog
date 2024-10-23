// Custom Toast UI Editor
import React, { useRef } from "react";
// TOAST UI Editor
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/i18n/ko-kr"; // language
import "@toast-ui/editor/dist/toastui-editor.css"; // default css
import color from "@toast-ui/editor-plugin-color-syntax"; // 'color syntax' plugin
import "tui-color-picker/dist/tui-color-picker.css"; // 'color syntax' css
import codeHighlight from "@toast-ui/editor-plugin-code-syntax-highlight"; // 'code syntax highlight' plugin
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css"; // 'code syntax highlight' css

const MyEditor = () => {
  const editorRef = useRef();

  const handleImg = (blob, callback) => {
    console.log(blob); // 업로드된 이미지의 Blob 데이터
    console.log(callback); // 콜백 함수
    // 이미지 업로드 로직을 여기에서 구현
  };

  const onChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    console.log(data);
  };

  return (
    <Editor
      language="ko-KR"
      height="100%"
      previewStyle="vertical"
      initialEditType="markdown"
      initialValue="Default Type Markdown"
      placeholder="내용을 입력해 주세요."
      ref={editorRef}
      onChange={onChange}
      plugins={[codeHighlight, color]}
      hooks={{ addImageBlobHook: handleImg }}
    />
  );
};

export default MyEditor;
