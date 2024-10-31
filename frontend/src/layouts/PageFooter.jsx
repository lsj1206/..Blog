import React from "react";
import { styled } from "../styles/Theme";

const PageHeader = ({ children }) => {
  return (
    <PageHeaderContainer>
      <BorderLine />
      {children}
    </PageHeaderContainer>
  );
};

const PageHeaderContainer = styled.div`
  background-color: transparent;
`;

const BorderLine = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

export default PageHeader;
