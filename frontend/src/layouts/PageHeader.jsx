import React from "react";
import { styled } from "../styles/Theme";

const PageHeader = ({ title }) => {
  return (
    <PageHeaderContainer>
      <Title>{title}</Title>
      <Line />
    </PageHeaderContainer>
  );
};

const PageHeaderContainer = styled.div`
  background-color: transparent;
`;

const Title = styled.h2`
  padding-top: 25px;
`;

const Line = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

export default PageHeader;
