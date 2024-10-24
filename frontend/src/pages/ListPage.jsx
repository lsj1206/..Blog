import React from "react";
import { styled } from "../styles/Theme";

import PageHeader from "../layouts/PageHeader";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";

import TextButton from "../components/buttons/TextButton";
import { useNavigate } from "react-router-dom";

const ListPage = () => {
  const navigate = useNavigate();

  // 임시 포스트 디테일 이동버튼
  const tempclick = () => {
    navigate("/posts/detail/" + 8);
  };

  return (
    <ListPageContainer>
      <PageHeader title={"게시글 목록"} />
      <TextButton size={[100, 30]} text={"TEMP_READ"} onClick={tempclick} />
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
