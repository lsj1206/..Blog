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
        <TagListItem>{"Tag"}</TagListItem>
        <TagListItem>{"BUG"}</TagListItem>
        <TagListItem>{"ISSUE"}</TagListItem>
        <TagListItem>{"react-router-dom"}</TagListItem>
        <TagListItem>{"REST API"}</TagListItem>
        <TagListItem>{"Hello"}</TagListItem>
        <TagListItem>{"styled-component"}</TagListItem>
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
