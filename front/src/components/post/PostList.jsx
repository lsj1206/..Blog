// Post List Component
import React from "react";
import { styled } from "../../styles/Theme";
// Components
import PostListItem from "./PostListItem";

const PostList = ({ className, posts }) => {
  return (
    <PostListContainer className={className}>
      <ListHeader></ListHeader>
      <BorderLine />
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
  overflow: hidden;
`;

const ListHeader = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  background-color: blue;
`;

const BorderLine = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

export default PostList;
