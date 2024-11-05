// Post List Item Component
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "../../styles/Theme";

const PostListItem = ({ className, post }) => {
  const navigate = useNavigate();

  const goReadPage = () => {
    navigate(`/posts/detail/${post.id}`);
  };

  const Category = "Category";
  const Views = "1234";
  const Author = "작성자";
  const Date = formatDate(post.created_at);

  return (
    <PostListItemContainer className={className} onClick={goReadPage}>
      <VerticalBorderLine />
      <TextBox>
        <TitleText>{post.title}</TitleText>
        <InfoText>{`${Author}`}</InfoText>
        <InfoText>{`${Views}`}</InfoText>
        <DateText>{`${Date}`}</DateText>
      </TextBox>
      <InfoBox>
        <CategoryBox>
          <p>{`${Category}`}</p>
        </CategoryBox>
        <TagBox>
          <p>{`${"Tag"}`}</p>
        </TagBox>
      </InfoBox>
    </PostListItemContainer>
  );
};

const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  return new Date(date).toLocaleDateString("ko-KR", options);
};

const PostListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bgLayout};
    border-radius: 15px;
    transform: scale(0.99);
  }
  &:active {
    transform: scale(0.99);
  }
`;

const VerticalBorderLine = styled.div`
  display: flex;
  margin: 10px 5px;
  position: absolute;
  width: 5px;
  height: 80px;
  background-color: ${({ theme }) => theme.brLine};
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 2rem;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
`;

const TitleText = styled.h2`
  flex: 6;
  align-items: center;
  font-size: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const InfoText = styled.p`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0.25rem 0;
  color: ${({ theme }) => theme.bgText};
  font-size: 1rem;
`;

const DateText = styled(InfoText)`
  flex: 2;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
`;

const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  height: 30px;
  color: ${({ theme }) => theme.btnActive};
  background-color: ${({ theme }) => theme.btnActiveText};
  border-radius: 5px;
`;

const CategoryBox = styled(ColorBox)``;

const TagBox = styled(ColorBox)``;

export default PostListItem;
