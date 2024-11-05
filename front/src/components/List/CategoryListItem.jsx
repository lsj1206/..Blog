// Category List Item Component
import React from "react";
import { styled } from "../../styles/Theme";

const CategoryListItem = ({ className, children }) => {
  return (
    <CategoryListItemContainer className={className} onClick={() => {}}>
      {children}
      <BorderLine />
    </CategoryListItemContainer>
  );
};

const CategoryListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transform: scale(1.075);
  }
  &:active {
    transform: scale(0.99);
  }
`;

const BorderLine = styled.div`
  margin: 5px 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

export default CategoryListItem;
