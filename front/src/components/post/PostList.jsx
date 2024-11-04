// Post List Component
import React from "react";
import { styled } from "../../styles/Theme";
// Components
import PostListItem from "./PostListItem";

const PostList = ({ className, posts }) => {
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
  width: 90vw;
  height: 70vh;
  color: ${({ theme }) => theme.text};
  overflow: hidden;
`;

export default PostList;
