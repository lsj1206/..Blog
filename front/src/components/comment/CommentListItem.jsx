// Comment List Item Component
import React from "react";
import { styled } from "../../styles/Theme";
// Assets
import { EllipsisIcon } from "../../assets/assets";
// Components
import DropDownIcon from "../button/DropDownIcon";

const Options = ["수정하기", "삭제하기"];

const dummytext = `[댓글 내용 더미 데이터 입니다..][댓글 내용 더미 데이터 입니다..][댓글 내용 더미 데이터 입니다..]`;

const CommentListItem = ({ className }) => {
  const TempDate = new Date();

  const updateDate = formatDate(TempDate);

  return (
    <CommentListItemContainer className={className}>
      <InfoBox>
        <NameText>{"댓글 작성자 이름 테스트"}</NameText>
        <DateText>{`${updateDate}`}</DateText>
      </InfoBox>
      <VerticalLine></VerticalLine>
      <ContentBox>
        <ContentText>
          {dummytext}
          {dummytext}
          {dummytext}
          {dummytext}
          {dummytext}
        </ContentText>
      </ContentBox>
      <ControlBox>
        <DropDownIcon size={[25, 25]} svgIcon={EllipsisIcon} list={Options} onClick={() => {}} />
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
  box-sizing: border-box;
  width: 1150px;
  min-height: 140px;
  max-height: 240px;
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
  padding-top: 10px;
  width: 50px;
`;

const VerticalLine = styled.div`
  margin: 5px 0;
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
