import React, { useState } from "react";
import { styled } from "../styles/Theme";
import axios from "axios";
// Components
import PageHeader from "../layouts/PageHeader";
import TextButton from "../components/buttons/TextButton";
// Toast UI Editor
import MyEditor from "../components/MyEditor";
// Axios - Promise API를 활용하는 HTTP 비동기 통신 라이브러리
// https://velog.io/@sunkim/React-axios-%EC%99%80-fetch-%EC%B0%A8%EC%9D%B4%EC%A0%90

const categories = ["카테고리 선택"];

const WritePage = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);

  // Submit 버튼 클릭 시 호출되는 함수
  const submitPost = async () => {
    if (!title) {
      alert("제목과 분류는 필수입니다.");
      return;
    }

    const postData = {
      title, // 제목
      content, // 에디터 내용
      // category, // 선택된 카테고리
    };

    try {
      // axios를 사용하여 백엔드에 POST 요청 보내기
      const response = await axios.post(
        "http://127.0.0.1:8000/api/posts/create",
        postData,
        {
          headers: {
            "Content-Type": "application/json", // 요청의 Content-Type 설정
          },
        }
      );

      console.log("Post saved successfully:", response.data);
      alert("게시물이 성공적으로 저장되었습니다.");
    } catch (error) {
      console.error("Error saving post:", error);
      alert("게시물 저장 중 오류가 발생했습니다.");
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
          <MyEditor content={content} setContent={setContent} />
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
