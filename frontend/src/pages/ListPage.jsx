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

const sortOptions = ["최신순", "인기순", "오래된 순"];

const ListPage = () => {
  const [posts, setPosts] = useState([]);

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

  const handleSortSelect = (selectedOption) => {
    console.log("Selected option:", selectedOption);
    // 정렬 로직 추가
  };

  return (
    <ListPageContainer>
      <PageHeader children={<Title>{"게시글 목록"}</Title>} />
      <IconBox>
        <DDIconButton
          onClick={handleSortSelect}
          size={[20, 20]}
          svgIcon={SortIcon}
          DDList={sortOptions}
        />
      </IconBox>
      <PostList posts={posts} />
      <PageFooter>
        <ListNavigation />
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
