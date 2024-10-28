import React from "react";
import { styled } from "../styles/Theme";

//Img
import ThumbnailImg from "../assets/thumbnail.jpg";

const PostListItem = ({ title, content, createdAt, thumbnail, onClick }) => {
  return (
    <PostContainer onClick={onClick}>
      <ThumbnailBox>
        <img src={thumbnail || ThumbnailImg} alt={"_thumbnail"}></img>
      </ThumbnailBox>
      <TextBox>
        <Title>{title}</Title>
        <PostInfoBox>
          <Category>Category</Category>
          <Date>{createdAt}</Date>
        </PostInfoBox>
        <Description>{content}</Description>
      </TextBox>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  width: 100%;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
`;

const ThumbnailBox = styled.div`
  position: relative;
  width: 150px;
  margin-left: 15px;
  margin-right: 15px;
`;

const TextBox = styled.div`
  display: flex;
  flex: 1; /* 남은 공간을 TextBox가 차지함 */
  flex-direction: column;
  margin-right: 30px;
  padding: 10px;
`;

const Title = styled.h2`
  height: 35%;
`;

const PostInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 25%;
`;

const Category = styled.p`
  align-items: center;
  margin-right: 20px;
`;

const Date = styled.p`
  align-items: center;
`;

const Description = styled.p`
  display: -webkit-box; /* Flexbox처럼 동작 */
  -webkit-line-clamp: 2; /* 두 줄까지만 표시 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; /* 넘친 텍스트를 "..."으로 표시 */
  white-space: normal;
  height: 40%;
`;

export default PostListItem;
