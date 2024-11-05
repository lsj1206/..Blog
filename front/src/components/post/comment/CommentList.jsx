// Comment List Component
import React from "react";
import { styled } from "../../../styles/Theme";
// Components
import CommentListItem from "./CommentListItem";

const CommentList = ({ className }) => {
  return (
    <CommentListContainer className={className}>
      <CommentListItem />
    </CommentListContainer>
  );
};

const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CommentList;
