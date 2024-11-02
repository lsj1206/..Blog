import React, { useState } from "react";
import { styled } from "../styles/Theme";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Components
import PageHeader from "../layouts/PageHeader";
import PageFooter from "../layouts/PageFooter";
import TextButton from "../components/button/TextButton";
import DropdownMenu from "../components/button/DropDownMenu";
// Toast UI Editor
import MyEditor from "../components/post/MyEditor";

const categories = ["List entry #1", "List entry #2", "List entry #3"];
const writeURL = "http://127.0.0.1:8000/api/posts/create";

const WritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitPost = async () => {
    if (!title) {
      alert("제목과 분류는 필수입니다.");
      return;
    }

    try {
      // 게시글 데이터 전송
      const postData = { title, content };
      await axios.post(writeURL, postData, {
        headers: { "Content-Type": "application/json" },
      });

      alert("게시물이 성공적으로 저장되었습니다.");
      navigate(-1);
    } catch (error) {
      console.error("Error:", error);
      alert("Error status: " + error.response.status);
    }
  };

  return (
    <WritePageContainer>
      <PageHeader children={<PageName>{"게시글 작성"}</PageName>} />
      <PostInfoContainer>
        <TitleInput
          type="text"
          value={title}
          placeholder="제목을 입력하세요 (80자 제한)"
          maxLength={80}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InfoBox>
          <DropdownMenu menulist={categories} placeholder="Select Category" />
          <TextButton size={[100, 30]} text={"작성 완료"} onClick={submitPost} />
        </InfoBox>
      </PostInfoContainer>
      <MyEditor size={[0, 460]} setContent={setContent} />
      <PageFooter />
    </WritePageContainer>
  );
};

const WritePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 90%;
  background-color: transparent;
`;

const PageName = styled.h2`
  padding-top: 25px;
`;

const PostInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 5px;
  width: 100%;
  height: 50px;
`;

const TitleInput = styled.input`
  padding: 10px;
  width: 50%;
  background-color: ${({ theme }) => theme.bgLayout};
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  border: 0;
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.brLine};
    box-shadow: 0 0 5px rgba(125, 125, 125, 0.5);
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
`;

export default WritePage;
