// 게시글 내용을 읽는 페이지

import React from "react";
import { styled } from "../styles/Theme";
// Toast UI Editor Viewer
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css"; // default CSS

const ReadPage = ({ contents }) => {
  return (
    <ReadPageContainer>
      <Viewer initialValue={contents || ""} />
    </ReadPageContainer>
  );
};

const ReadPageContainer = styled.div``;

export default ReadPage;
