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
      <PageHeader children={<Title>{"게시글 목록"}</Title>} />
      <IconBox>
        <DDIconButton size={[20, 20]} svgIcon={SortIcon} DDList={sortOptions} onClick={sortPage} />
      </IconBox>
      <PostList posts={nowPosts} />
      <PageFooter>
        <ListNavigation totalPageSize={totalPageSize} onClick={setNowPage} />
      </PageFooter>
    </ListPageContainer>
  );
};

const ListPageContainer = styled.div`
  margin-left: 20px;
  position: relative;
  width: 90%;
  background-color: transparent;
`;

const Title = styled.h2`
  padding-top: 25px;
`;

const IconBox = styled.div`
  z-index: 10;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 0;
`;

export default ListPage;
