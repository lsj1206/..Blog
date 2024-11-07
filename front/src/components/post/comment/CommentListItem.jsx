// Comment List Item Component
import React from "react";
import { styled } from "../../../styles/Theme";
// Assets
import { EllipsisIcon } from "../../../assets/assets";
// Components
import DropDownIcon from "../../button/DropDownIcon";
import TextButton from "../../button/TextButton";

const Options = ["수정하기", "삭제하기"];

const CommentListItem = ({ className, comment }) => {
  const updateDate = formatDate(comment?.created_at);

  return (
    <CommentListItemContainer className={className}>
      <InfoBox>
        <NameText>{"댓글 작성자 이름 테스트"}</NameText>
        <DateText>{`${updateDate}`}</DateText>
      </InfoBox>
      <VerticalLine />
      <ContentBox>
        <ContentText>{comment?.content}</ContentText>
      </ContentBox>
      <ControlBox>
        <DropDownIcon size={[25, 25]} svgIcon={EllipsisIcon} list={Options} onClick={() => {}} />
        <TextButton size={[50, 30]} text={`답글`} onClick={() => {}} />
      </ControlBox>
    </CommentListItemContainer>
  );
};

const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return new Date(date).toLocaleDateString("ko-KR", options);
};

const CommentListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  width: 1200px;
  min-height: 140px;
  max-height: 240px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bgLayout};
  border-radius: 5px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 5px;
  padding: 10px;
  width: 150px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bgLayout};
  border: 0;
`;

const ContentBox = styled.div`
  margin: 15px 10px;
  padding: 0 10px;
  width: 950px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bgLayout};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  border: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ControlBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 10px;
  width: 50px;
`;

const VerticalLine = styled.div`
  margin: 10px 0;
  border: 0;
  border-left: 0.1rem solid ${({ theme }) => theme.brLine};
`;

const NameText = styled.p`
  vertical-align: baseline;
  margin-right: 0.1rem;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  word-break: break-all;
`;

const DateText = styled.p`
  margin-bottom: -10px;
  color: ${({ theme }) => theme.bgText};
  font-size: 0.9rem;
`;

const ContentText = styled.p`
  vertical-align: baseline;
  margin-left: 0.1rem;
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
`;

export default CommentListItem;
