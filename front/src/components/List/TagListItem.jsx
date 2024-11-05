// Category List Item Component
import React from "react";
import { styled } from "../../styles/Theme";

const TagListItem = ({ className, children }) => {
  return (
    <TagListItemContainer className={className} onClick={() => {}}>
      {children}
      <BorderLine />
    </TagListItemContainer>
  );
};

const TagListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
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

export default TagListItem;
