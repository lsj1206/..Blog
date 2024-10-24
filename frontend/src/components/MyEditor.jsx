// Custom Toast UI Editor
import React, { useRef, useEffect } from "react";
// TOAST UI Editor
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/i18n/ko-kr"; // language
import "@toast-ui/editor/dist/toastui-editor.css"; // default css
import color from "@toast-ui/editor-plugin-color-syntax"; // 'color syntax' plugin
import "tui-color-picker/dist/tui-color-picker.css"; // 'color syntax' css
import codeHighlight from "@toast-ui/editor-plugin-code-syntax-highlight"; // 'code syntax highlight' plugin
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css"; // 'code syntax highlight' css

const MyEditor = ({ setContent }) => {
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
    <React.Fragment>
      <Editor
        height="100%"
        language="ko-KR"
        initialEditType="markdown"
        placeholder="내용을 입력해 주세요."
        previewStyle="vertical"
        hideModeSwitch={true}
        ref={editorRef}
        onChange={onChange}
        plugins={[codeHighlight, color]}
        hooks={{ addImageBlobHook: handleImg }}
      />
    </React.Fragment>
  );
};

export default MyEditor;
