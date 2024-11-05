// Tag List Component
import React from "react";
import { styled } from "../../styles/Theme";
// Components
import TagListItem from "./TagListItem";

const TagList = ({ className }) => {
  return (
    <TagListContainer className={className}>
      <TitleText>{"Tag List"}</TitleText>
      <BorderLine />
      <ItemBox>
        <TagListItem>{"Tag-1"}</TagListItem>
        <TagListItem>{"Tag-2"}</TagListItem>
        <TagListItem>{"Tag-3"}</TagListItem>
        <TagListItem>{"Tag-4"}</TagListItem>
        <TagListItem>{"Tag-5"}</TagListItem>
        <TagListItem>{"Tag-6"}</TagListItem>
        <TagListItem>{"Tag-7"}</TagListItem>
      </ItemBox>
    </TagListContainer>
  );
};

const TagListContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.brLine};
  border-radius: 15px;
`;

const TitleText = styled.h3``;

const BorderLine = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

const ItemBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
`;

export default TagList;
