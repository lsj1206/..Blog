// Post List Component
import React from "react";
import { styled } from "../styles/Theme";
// Components
import PostListItem from "./PostListItem";

const PostList = ({ className, posts }) => {
  // posts prop 추가
  return (
    <PostListContainer className={className}>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </PostListContainer>
  );
};

const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.text};
  overflow-x: hidden;
  overflow-y: auto;
`;

export default PostList;
