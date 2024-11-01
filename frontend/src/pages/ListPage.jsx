// Page - Post List
import React, { useState, useEffect } from "react";
import { styled } from "../styles/Theme";
import axios from "axios";
// Components
import PageHeader from "../layouts/PageHeader";
import PageFooter from "../layouts/PageFooter";
import PostList from "../components/PostList";
import ListNavigation from "../components/ListNavigation";
import DDIconButton from "../components/buttons/DDIconButton";
// Icons
import { ReactComponent as SortIcon } from "../assets/icons/filter-solid.svg";
// API
const listURL = "http://localhost:8000/api/posts/list";

const sortOptions = ["최신순", "오래된 순"];

const ListPage = () => {
  const [posts, setPosts] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  // PageNavigation 계산
  const pageSize = 5; // 페이지 당 표현할 Post 수
  const totalPageSize = Math.ceil(posts.length / pageSize);
  const nowPosts = posts.slice((nowPage - 1) * pageSize, nowPage * pageSize);

  useEffect(() => {
    const getPostList = async () => {
      try {
        const response = await axios.get(listURL);
        setPosts(response.data);
      } catch (error) {
        console.error("게시글 목록을 가져오는데 문제가 발생했습니다.", error);
      }
    };
    getPostList();
  }, []);

  // 정렬 기능
  const sortPage = () => {};

  return (
    <ListPageContainer>
      <PageHeader>
        <Title>{"게시글 목록"}</Title>
        <SortButton size={[25, 25]} svgIcon={SortIcon} DDList={sortOptions} onClick={sortPage} />
      </PageHeader>
      <PostList posts={nowPosts} />
      <ListPageFooter>
        <ListNavigation totalPageSize={totalPageSize} onClick={setNowPage} />
      </ListPageFooter>
    </ListPageContainer>
  );
};

const ListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  position: relative;
  width: 90%;
  background-color: transparent;
`;

const Title = styled.h2`
  padding-top: 25px;
`;

const SortButton = styled(DDIconButton)`
  z-index: 10;
  margin-bottom: -10px;
`;

const ListPageFooter = styled(PageFooter)`
  margin-left: 20px;
  margin-bottom: 25px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 90%;
`;

export default ListPage;
