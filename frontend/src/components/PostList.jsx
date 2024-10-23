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
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

export default PostList;
