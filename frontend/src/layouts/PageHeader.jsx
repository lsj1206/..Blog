import React from "react";
import { styled } from "../styles/Theme";

const PageHeader = ({ children }) => {
  return (
    <PageHeaderContainer>
      {children}
      <BorderLine />
    </PageHeaderContainer>
  );
};

const PageHeaderContainer = styled.div`
  background-color: transparent;
`;

const BorderLine = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

export default PageHeader;
