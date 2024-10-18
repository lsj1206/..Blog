import React from "react";
import { styled } from "../styles/Theme";

import PageHeader from "../layouts/PageHeader";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";

const ListPage = () => {
  return (
    <ListPageContainer>
      <PageHeader title={"게시글 목록"} />
      {/* 게시글 목록 정렬 기능 추가 ex) 최신순,오래된순,조회순 */}
      <PostList />
      <UnderLine $marginTop={15} $marginBottom={5} />
      <Pagination />
    </ListPageContainer>
  );
};

const ListPageContainer = styled.div`
  position: relative;
  margin-left: 20px;
  width: 90%;
  background-color: transparent;
`;

const UnderLine = styled.div`
  margin-top: ${({ $marginTop }) => `${$marginTop}px`};
  margin-bottom: ${({ $marginBottom }) => `${$marginBottom}px`};
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

export default ListPage;
