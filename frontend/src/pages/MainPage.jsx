import React from "react";
import { styled } from "../styles/Theme";

import PostList from "../components/PostList";
import Pagination from "../components/Pagination";

const MainPage = () => {
  return (
    <MainPageContainer>
      <Title>게시글 목록</Title>
      <Line $marginTop={5} $marginBottom={15} />
      <PostList />
      <Line $marginTop={15} $marginBottom={5} />
      <Pagination />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  top: 0;
  width: 80%;
  height: 580px;
  margin-left: 10px;
  position: relative;
  background-color: transparent;
`;

const Title = styled.h2`
  padding-top: 25px;
`;

const Line = styled.div`
  margin-top: ${({ $marginTop }) => `${$marginTop}px`};
  margin-bottom: ${({ $marginBottom }) => `${$marginBottom}px`};
  height: 1px;
  background-color: #777;
`;

export default MainPage;
