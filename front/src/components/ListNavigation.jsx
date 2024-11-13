// List Navigation Component
import React, { useState } from "react";
import { styled } from "../styles/Theme";
// Assets
import { PrevIcon, PrevShiftIcon, NextIcon, NextShiftIcon } from "../assets/assets";
// Components
import IconButton from "./button/IconButton";
import TextButton from "./button/TextButton";

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
      <MoveButton onClick={() => setPage(1)} size={[20, 20]} svgIcon={PrevShiftIcon} />
      <MoveButton onClick={() => setPage(Math.max(1, nowPage - 1))} size={[20, 20]} svgIcon={PrevIcon} />
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
      <MoveButton onClick={() => setPage(Math.min(totalPageSize, nowPage + 1))} size={[20, 20]} svgIcon={NextIcon} />
      <MoveButton onClick={() => setPage(totalPageSize)} size={[20, 20]} svgIcon={NextShiftIcon} />
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

const MoveButton = styled(IconButton)`
  border-radius: 25%;
  &:hover {
    background-color: ${({ theme }) => theme.bgSub};
  }
  &:active {
    background-color: ${({ theme }) => theme.btnActive};
  }
`;

const NumberButton = styled(TextButton)`
  margin: 0;
  background-color: ${({ $onPage }) => ($onPage ? "" : "transparent")};
`;

export default ListNavigation;
