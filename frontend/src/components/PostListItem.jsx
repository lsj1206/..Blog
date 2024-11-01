// Post List Item Component
import React from "react";
import { styled } from "../styles/Theme";
import { useNavigate } from "react-router-dom";
//Img
import ThumbnailImg from "../assets/thumbnail.jpg";

const PostListItem = ({ className, post, thumbnail }) => {
  const navigate = useNavigate();

  const goReadPage = () => {
    navigate(`/posts/detail/${post.id}`);
  };

  const createDate = formatDate(post.created_at);
  const updateDate = formatDate(post.created_at);

  const Category = "Category";

  return (
    <PostListItemContainer className={className} onClick={goReadPage}>
      <ThumbnailBox>
        <img src={thumbnail || ThumbnailImg} alt={"_thumbnail"} />
      </ThumbnailBox>
      <InfoBox>
        <TitleText>{post.title}</TitleText>
        <DescriptionText>{post.content}</DescriptionText>
        <InfoText>{`${Category} | ${createDate}(${updateDate})`}</InfoText>
      </InfoBox>
    </PostListItemContainer>
  );
};

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return new Date(date).toLocaleDateString("ko-KR", options);
};

const PostListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 130px;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  cursor: pointer;

  &:active {
    transform: scale(0.99);
  }
`;

const ThumbnailBox = styled.div`
  display: flex;
  margin: 5px 10px;
  min-width: 160px;
  min-height: 120px;
  max-width: 160px;
  max-height: 120px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.625rem;
  position: relative;
  overflow: hidden;
`;

const TitleText = styled.h2`
  margin: 0.25rem 0;
  vertical-align: baseline;
  font-size: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const DescriptionText = styled.p`
  display: -webkit-box;
  vertical-align: baseline;
  height: 3rem;
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const InfoText = styled.p`
  display: flex;
  flex: none;
  margin: 0.25rem 0;
  color: ${({ theme }) => theme.bgText};
  font-size: 0.8rem;
`;

export default PostListItem;
