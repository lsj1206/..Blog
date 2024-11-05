// Category List Component
import React from "react";
import { styled } from "../../styles/Theme";
// Components
import CategoryListItem from "./CategoryListItem";

const CategoryList = ({ className }) => {
  return (
    <CategoryListContainer className={className}>
      <TitleText>{"Category List"}</TitleText>
      <BorderLine />
      <CategoryListItem>{"HTML"}</CategoryListItem>
      <CategoryListItem>{"CSS"}</CategoryListItem>
      <CategoryListItem>{"JavaScript"}</CategoryListItem>
      <CategoryListItem>{"React"}</CategoryListItem>
      <CategoryListItem>{"TypeScript"}</CategoryListItem>
      <CategoryListItem>{"Svelt"}</CategoryListItem>
      <CategoryListItem>{"C"}</CategoryListItem>
      <CategoryListItem>{"C++"}</CategoryListItem>
      <CategoryListItem>{"JAVA"}</CategoryListItem>
    </CategoryListContainer>
  );
};

const CategoryListContainer = styled.div`
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

export default CategoryList;
