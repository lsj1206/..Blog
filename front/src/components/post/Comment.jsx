// Comment Component
import React from "react";
import { styled } from "../../styles/Theme";
// Components
import CommentList from "./comment/CommentList";
import CommentWrite from "./comment/CommentWrite";

const Comment = ({ className, postId, comments }) => {
  return (
    <CommentContainer className={className}>
      <CommentHeader>
        <Title>{`${comments.length}개의 댓글`}</Title>
      </CommentHeader>
      <BorderLine />
      <CommentList comments={comments} />
      <CommentWrite postId={postId} />
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.h3`
  padding-top: 25px;
`;

const BorderLine = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

export default Comment;
