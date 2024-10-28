import React from "react";
import { styled } from "../styles/Theme";
// Components
import PageHeader from "../layouts/PageHeader";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";
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
      <PageHeader title={"게시글 목록"} />
      <IconBox>
        <DDIconButton
          onClick={handleSortSelect}
          size={[20, 20]}
          svgIcon={SortIcon}
          DDList={sortOptions}
        />
      </IconBox>
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

const IconBox = styled.div`
  z-index: 10;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 0;
`;

const UnderLine = styled.div`
  margin-top: ${({ $marginTop }) => $marginTop}px;
  margin-bottom: ${({ $marginBottom }) => $marginBottom}px;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

export default ListPage;
