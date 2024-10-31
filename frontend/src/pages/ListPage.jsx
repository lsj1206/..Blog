import React from "react";
import { styled } from "../styles/Theme";
// Components
import PageHeader from "../layouts/PageHeader";
import PageFooter from "../layouts/PageFooter";
import PostList from "../components/PostList";
import ListNavigation from "../components/ListNavigation";
import DDIconButton from "../components/buttons/DDIconButton";
//Icons
import { ReactComponent as SortIcon } from "../assets/icons/filter-solid.svg";

const ListPage = () => {
  const sortOptions = ["최신순", "인기순", "오래된 순"];

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
      <PostList />
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
