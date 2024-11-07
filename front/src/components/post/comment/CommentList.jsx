// Comment List Component
import React from "react";
import { styled } from "../../../styles/Theme";
// Components
import CommentListItem from "./CommentListItem";

const CommentList = ({ className, comments }) => {
  return (
    <CommentListContainer className={className}>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </CommentListContainer>
  );
};

const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export default CommentList;
