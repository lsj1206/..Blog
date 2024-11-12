// Page Header
import React from "react";
import { styled } from "../styles/Theme";

const PageHeader = ({ className, children }) => {
  return (
    <PageHeaderContainer className={className}>
      <ChildrenContainer>{children}</ChildrenContainer>
      <BorderLine />
    </PageHeaderContainer>
  );
};

const PageHeaderContainer = styled.div`
  width: 100%;
  background-color: transparent;
`;

const ChildrenContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
`;

const BorderLine = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

export default PageHeader;
