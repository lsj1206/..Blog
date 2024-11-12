import React, { useState } from "react";
import { styled } from "../../styles/Theme";

const IndexNav = ({ className, content }) => {

  return (
    <CategoryListContainer className={className}>
      <TitleText>{"목차"}</TitleText>
      <BorderLine />
      {/* 헤더 목록 */}
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


export default IndexNav;
