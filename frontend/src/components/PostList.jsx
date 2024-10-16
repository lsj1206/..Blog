import React from "react";
import { styled } from "../styles/Theme";

import PostListItem from "./PostListItem";

const PostList = () => {
  return (
    <PostListContainer>
      <PostListItem></PostListItem>
      <PostListItem></PostListItem>
      <PostListItem></PostListItem>
      <PostListItem></PostListItem>
    </PostListContainer>
  );
};

const PostListContainer = styled.div`
  height: 460px;
  display: flex;
  flex-direction: column;
`;

export default PostList;
