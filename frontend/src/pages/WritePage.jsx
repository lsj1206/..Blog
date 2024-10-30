import React, { useState } from "react";
import { styled } from "../styles/Theme";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Components
import PageHeader from "../layouts/PageHeader";
import TextButton from "../components/buttons/TextButton";
import DropdownMenu from "../components/DDMenu";
// Toast UI Editor
import MyEditor from "../components/MyEditor";

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
      <PageHeader title={"글 쓰기"} />
      <UtilContainer>
        <TitleInput
          type="text"
          value={title}
          placeholder="제목을 입력하세요"
          onChange={(e) => setTitle(e.target.value)}
        />
        <UtilityBox>
          <DropdownMenu menulist={categories} placeholder="Select Category" />
          <TextButton size={[80, 30]} text={"Submit"} onClick={submitPost} />
        </UtilityBox>
      </UtilContainer>
      <MyEditor size={[0, 460]} setContent={setContent} />
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

const UtilContainer = styled.div`
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

const UtilityBox = styled.div`
  display: flex;
  align-items: center;
`;

export default WritePage;
