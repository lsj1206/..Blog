import React, { useState } from "react";
import { styled } from "../styles/Theme";

import PageHeader from "../layouts/PageHeader";
import TextButton from "../components/buttons/TextButton";
// Toast UI Editor
import MyEditor from "../components/MyEditor";

const categories = ["카테고리 선택", "Category-1", "Category-2"];

const WritePage = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("현재 사용자"); // 사용자 이름을 직접 입력하는 대신 고정 값 사용
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSave = () => {
    // Save logic here
    console.log("Saved Content: ", content);
    // 서버에 POST 요청을 보내거나 필요한 로직을 구현하세요.
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
            <TextButton
              width={80}
              height={30}
              text={"Submit"}
              onClick={() => {}}
            />
          </UtilityBox>
        </TopContainer>
        <MyEditor height={460} content={content} setContent={setContent} />
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

export default WritePage;
