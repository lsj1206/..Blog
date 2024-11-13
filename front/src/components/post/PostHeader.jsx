// Post Header Component
import React from "react";
import { styled } from "../../styles/Theme";
// Assets
import { CategoryIcon, TagsIcon, AuthorIcon, ViewIcon, DateIcon, LastDateIcon } from "../../assets/assets";

const PostHeader = ({ className, post }) => {
  const createDate = formatDate(post?.created_at);
  const updateDate = formatDate(post?.updated_at);

  return (
    <PageHeaderContainer className={className}>
      <TopBox>
        <Title>{post?.title}</Title>
        <AuthorBox>
          <AuthorTextIcon />
          <InfoText>{post?.author}</InfoText>
        </AuthorBox>
      </TopBox>
      <BorderLine />
      <BottomBox>
        <LeftBox>
          <CategoryTextIcon />
          <CategoryText>{post?.category}</CategoryText>
          <TagList>
            <TagTextIcon />
            {post?.tag && post?.tag.map((tag, index) => <TagText key={index}>{tag}</TagText>)}
          </TagList>
        </LeftBox>
        <RightBox>
          <ViewTextIcon />
          <InfoText>{post?.views}</InfoText>
          <DateTextIcon />
          <InfoText>{createDate}</InfoText>
          <LastDateTextIcon />
          <InfoText>{updateDate}</InfoText>
        </RightBox>
      </BottomBox>
    </PageHeaderContainer>
  );
};

const formatDate = (date) => {
  if (!date) {
    return "----년 --월 --일";
  }
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return new Date(date).toLocaleDateString("ko-KR", options);
};

const PageHeaderContainer = styled.div`
  width: 100%;
  background-color: transparent;
`;

const BorderLine = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  height: 1px;
  background-color: ${({ theme }) => theme.brLine};
`;

const TopBox = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TagList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

const AuthorBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  padding-top: 25px;
`;

const InfoText = styled.p`
  margin-right: 20px;
  color: ${({ theme }) => theme.bgText};
  font-weight: bolder;
`;

const CategoryText = styled(InfoText)`
  margin-right: 10px;
  padding: 1px 4px;
  background-color: ${({ theme }) => theme.bgLayout};
  color: ${({ theme }) => theme.highlightText};
  border-radius: 4px;
`;

const TagText = styled(InfoText)`
  margin-right: 10px;
  padding: 1px 4px;
  background-color: ${({ theme }) => theme.bgLayout};
  color: ${({ theme }) => theme.highlightText};
  border-radius: 4px;
`;

const CategoryTextIcon = styled(CategoryIcon)`
  margin: 0 0.25rem;
  width: 1rem;
  height: 1rem;
  fill: ${({ theme }) => theme.bgText};
`;

const TagTextIcon = styled(TagsIcon)`
  margin: 0 0.25rem;
  width: 1rem;
  height: 1rem;
  fill: ${({ theme }) => theme.bgText};
`;

const AuthorTextIcon = styled(AuthorIcon)`
  margin: 0 0.25rem;
  width: 1rem;
  height: 1rem;
  fill: ${({ theme }) => theme.bgText};
`;

const ViewTextIcon = styled(ViewIcon)`
  margin: 0 0.25rem;
  width: 1rem;
  height: 1rem;
  fill: ${({ theme }) => theme.bgText};
`;

const DateTextIcon = styled(DateIcon)`
  margin: 0 0.25rem;
  width: 1rem;
  height: 1rem;
  fill: ${({ theme }) => theme.bgText};
`;

const LastDateTextIcon = styled(LastDateIcon)`
  margin: 0 0.25rem;
  width: 1rem;
  height: 1rem;
  fill: ${({ theme }) => theme.bgText};
`;

export default PostHeader;
