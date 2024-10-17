import React from "react";
import { styled } from "../styles/Theme";

//Img
import ThumbnailImg from "../assets/thumbnail.jpg";

const PostListItem = ({ onClick, thumbnail, text }) => {
  return (
    <PostContainer onClick={onClick}>
      <ThumbnailBox>
        <img src={thumbnail || ThumbnailImg} alt={"thumbnail"}></img>
      </ThumbnailBox>
      <TextBox>
        <Title>Title</Title>
        <PostInfoBox>
          <Category>Category</Category>
          <p> ---- </p>
          <Date>Date</Date>
        </PostInfoBox>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Description>
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
