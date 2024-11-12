// Comment Component
import React from "react";
import { styled } from "../../styles/Theme";
// Assets
import { ShareIcon, LinkCopyIcon, XtwitterIcon, KakaoIcon } from "../../assets/assets";
// Components
import CommentList from "./comment/CommentList";
import CommentWrite from "./comment/CommentWrite";
import IconButton from "../button/IconButton";

const Comment = ({ className, postId, comments }) => {
  const copyUrl = () => {
    const url = window.location.href; // 현재 페이지의 URL
    navigator.clipboard.writeText(url);
  };
  return (
    <CommentContainer className={className}>
      <CommentHeader>
        <Title>{`${comments?.length}개의 댓글`}</Title>
        <ShareBox>
          <NoneClickIcon size={[25, 25]} svgIcon={ShareIcon} />
          <IconButton size={[25, 25]} svgIcon={LinkCopyIcon} onClick={copyUrl} />
          <IconButton size={[25, 25]} svgIcon={XtwitterIcon} onClick={() => {}} />
          <IconButton size={[25, 25]} svgIcon={KakaoIcon} onClick={() => {}} />
        </ShareBox>
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
  width: 100%;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
`;

const Title = styled.h3`
  padding-top: 25px;
`;

const ShareBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 25px;
`;

const NoneClickIcon = styled(IconButton)`
  pointer-events: none;
`;

const BorderLine = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

export default Comment;
