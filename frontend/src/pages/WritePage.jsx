import React, { useState } from "react";
import { styled } from "../styles/Theme";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Components
import PageHeader from "../layouts/PageHeader";
import TextButton from "../components/buttons/TextButton";
// Toast UI Editor
import MyEditor from "../components/MyEditor";
// Axios - Promise API를 활용하는 HTTP 비동기 통신 라이브러리
// https://velog.io/@sunkim/React-axios-%EC%99%80-fetch-%EC%B0%A8%EC%9D%B4%EC%A0%90

const postURL = "http://127.0.0.1:8000/api/posts/create";

const categories = ["카테고리 선택"];

const WritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const submitPost = async () => {
    if (!title) {
      alert("제목과 분류는 필수입니다.");
      return;
    }

    const postData = {
      title,
      content,
      //category,
    };

    try {
      // axios로 Back-End에 POST
      await axios.post(postURL, postData, {
        headers: {
          "Content-Type": "application/json",
        },
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
      <EditorContainer>
        <TopContainer>
          <TitleBox>
            <TitleInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="제목을 입력하세요"
            />
          </TitleBox>
          <UtilityBox>
            <CategorySelect
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </CategorySelect>
            <TextButton size={[80, 30]} text={"Submit"} onClick={submitPost} />
          </UtilityBox>
        </TopContainer>
        <EditorBox>
          <MyEditor setContent={setContent} />
        </EditorBox>
      </EditorContainer>
    </WritePageContainer>
  );
};

const WritePageContainer = styled.div`
  margin-left: 20px;
  width: 90%;
  background-color: transparent;
`;

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 5px;
  width: 100%;
  height: 50px;
`;

const TitleBox = styled.div`
  margin-right: 20px;
  width: 50%;
`;

const TitleInput = styled.input`
  padding: 10px;
  width: 100%;
  font-size: 18px;
  border: 1px solid ${({ theme }) => theme.brLine};
  border-radius: 4px;
`;

const UtilityBox = styled.div`
  display: flex;
  align-items: center;
`;

const CategorySelect = styled.select`
  margin-right: 10px;
  padding: 5px;
  width: 180px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.brLine};
  border-radius: 4px;
`;

const EditorBox = styled.div`
  height: 460px;
  background-color: white;
  border-radius: 4px;
`;

export default WritePage;
