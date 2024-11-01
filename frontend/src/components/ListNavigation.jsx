import React, { useState } from "react";
import { styled } from "../styles/Theme";
// Components
import IconButton from "./buttons/IconButton";
import TextButton from "./buttons/TextButton";
// Icons
import { ReactComponent as LeftIcon } from "../assets/icons/angle-left-solid.svg";
import { ReactComponent as DbLeftIcon } from "../assets/icons/angles-left-solid.svg";
import { ReactComponent as RightIcon } from "../assets/icons/angle-right-solid.svg";
import { ReactComponent as DbRightIcon } from "../assets/icons/angles-right-solid.svg";

const ListNavigation = ({ totalPageSize, onClick }) => {
  const [nowPage, setNowPage] = useState(1);
  const maxLange = 9; // 한번에 표현할 PageNavigation 개수

  const setPage = (newPage) => {
    setNowPage(newPage);
    onClick(newPage);
  };

  // 최대 9개의 버튼 표시
  const getPageNumbers = () => {
    const numberArray = [];

    const start = Math.max(1, nowPage - Math.floor(maxLange / 2));
    const end = Math.min(totalPageSize, start + maxLange - 1);
    const newStart = Math.max(1, end - maxLange + 1);

    for (let i = newStart; i <= end; i++) {
      numberArray.push(i);
    }
    return numberArray;
  };
  const pageNumbers = getPageNumbers();

  return (
    <ListNavigationContainer>
      <IconButton onClick={() => setPage(1)} size={[20, 20]} svgIcon={DbLeftIcon} />
      <IconButton onClick={() => setPage(Math.max(1, nowPage - 1))} size={[20, 20]} svgIcon={LeftIcon} />
      <PageNumbers>
        {pageNumbers.map((page) => (
          <NumberButton
            onClick={() => setPage(page)}
            size={[30, 30]}
            text={page}
            key={page}
            $onPage={page === nowPage}
          />
        ))}
      </PageNumbers>
      <IconButton onClick={() => setPage(Math.min(totalPageSize, nowPage + 1))} size={[20, 20]} svgIcon={RightIcon} />
      <IconButton onClick={() => setPage(totalPageSize)} size={[20, 20]} svgIcon={DbRightIcon} />
    </ListNavigationContainer>
  );
};

const ListNavigationContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  color: ${({ theme }) => theme.text};
`;

const PageNumbers = styled.div`
  display: flex;
`;

const NumberButton = styled(TextButton)`
  margin: 0;
  background-color: ${({ $onPage }) => ($onPage ? "" : "transparent")};
`;

export default ListNavigation;
