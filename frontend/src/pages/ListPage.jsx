import React from "react";
import { styled } from "../styles/Theme";

import PostList from "../components/PostList";
import Pagination from "../components/Pagination";

const ListPage = () => {
  return (
    <MainPageContainer>
      <Title>게시글 목록</Title>
      {/* 게시글 목록 정렬 기능 추가 ex) 최신순,오래된순,조회순 */}
      <Line $marginTop={5} $marginBottom={15} />
      <PostList />
      <Line $marginTop={15} $marginBottom={5} />
      <Pagination />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  position: relative;
  margin-left: 20px;
  width: 90%;
  background-color: transparent;
`;

const Title = styled.h2`
  padding-top: 25px;
`;

const Line = styled.div`
  margin-top: ${({ $marginTop }) => `${$marginTop}px`};
  margin-bottom: ${({ $marginBottom }) => `${$marginBottom}px`};
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

export default ListPage;
