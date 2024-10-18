// 게시글 내용을 읽는 페이지

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "../styles/Theme";
import "@toast-ui/editor/dist/toastui-editor-viewer.css"; // TOAST UI Editor 뷰어 CSS (필요 시)

const ReadPage = () => {
  return (
    <ReadPageContainer>
      {/* <Numbering>{post.id}</Numbering>
      <Title>{post.title}</Title>
      <Author>
        {post.user} | {post.date}
      </Author>
      <Content>{post.content}</Content> */}
    </ReadPageContainer>
  );
};

const ReadPageContainer = styled.div``;

const Numbering = styled.div``;

const Title = styled.h1``;

const Author = styled.div``;

const Content = styled.div``;

export default ReadPage;
