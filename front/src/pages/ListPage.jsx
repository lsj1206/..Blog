// Post List Page
import React, { useState, useEffect } from "react";
import { styled } from "../styles/Theme";
import axios from "axios";
// Assets
import { SortIcon } from "../assets/assets";
// Components
import PageHeader from "../layouts/PageHeader";
import PageFooter from "../layouts/PageFooter";
import PostList from "../components/List/PostList";
import CategoryList from "../components/List/CategoryList";
import TagList from "../components/List/TagList";
import ListNavigation from "../components/ListNavigation";
import DDIconButton from "../components/button/DropDownIcon";
// API
const listURL = "http://localhost:8000/api/posts/list";

const sortOptions = ["최신순", "오래된 순"];

const ListPage = () => {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  // PageNavigation 계산
  const pageSize = 30; // 페이지 당 표현할 Post 수
  const totalPageSize = Math.ceil(posts.length / pageSize);
  const nowPosts = posts.slice((nowPage - 1) * pageSize, nowPage * pageSize);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(listURL);
        setPosts(res.data);
        setError(null);
      } catch (err) {
        setError("게시물 목록을 가져오는데 실패했습니다.");
      }
    };
    getPosts();
  }, []);

  return (
    <ListPageContainer>
      <PostContainer>
        <PageHeader>
          <Title>{"게시글 목록"}</Title>
          <SortButton size={[25, 25]} svgIcon={SortIcon} list={sortOptions} onClick={() => {}} />
        </PageHeader>
        {error && <ErrorText>{error}</ErrorText>}
        <PostList posts={nowPosts} />
        <PageFooter>
          <ListNavigation totalPageSize={totalPageSize} onClick={setNowPage} />
        </PageFooter>
      </PostContainer>
      <SideContainer>
        <CategoryList />
        <TagList />
      </SideContainer>
    </ListPageContainer>
  );
};

const ListPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  position: relative;
  width: 1800px;
  background-color: transparent;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1400px;
`;

const Title = styled.h2`
  padding-top: 25px;
`;

const SortButton = styled(DDIconButton)`
  z-index: 10;
  margin-bottom: -10px;
`;

const SideContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 60px 50px 50px 50px;
  width: 300px;
  box-sizing: border-box;
  background-color: transparent;
`;

const ErrorText = styled.h3`
  margin: 10px;
  color: red;
`;

export default ListPage;
