// Category List Item Component
import React from "react";
import { styled } from "../../styles/Theme";

const TagListItem = ({ className, children }) => {
  return (
    <TagListItemContainer className={className} onClick={() => {}}>
      {children}
      {/* <BorderLine /> */}
    </TagListItemContainer>
  );
};

const TagListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.1rem 0.3rem;
  padding: 0.1rem 0.75rem;
  cursor: pointer;

  background-color: ${({ theme }) => theme.bgLayout};
  border-radius: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.bgSub};
    transform: scale(1.075);
  }
  &:active {
    transform: scale(0.975);
  }
`;

export default TagListItem;
