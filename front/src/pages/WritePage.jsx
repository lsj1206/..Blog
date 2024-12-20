// Write Page
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { styled } from "../styles/Theme";
// Components
import PageHeader from "../layouts/PageHeader";
import PageFooter from "../layouts/PageFooter";
import TagCreate from "../components/TagCreate";
import TextButton from "../components/button/TextButton";
import DropdownMenu from "../components/button/DropDownMenu";
// Toast UI Editor
import MyEditor from "../components/post/MyEditor";
// API
const writeURL = "http://127.0.0.1:8000/api/posts/create";

const categories = ["List entry #1", "List entry #2", "List entry #3"];

const WritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [toolTip, setToolTip] = useState(false);

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
      <PageHeader>
        <InputBox onMouseLeave={() => setToolTip(false)}>
          <TitleInput
            type="text"
            value={title}
            placeholder="제목을 입력하세요"
            maxLength={80}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={() => setToolTip(true)}
          />
          {toolTip && <Tooltip>{`최대 80자 제한입니다.`}</Tooltip>}
        </InputBox>
        <SubmitButton size={[100, 30]} text={"게시하기"} onClick={submitPost} />
      </PageHeader>
      <PostInfoContainer>
        <DropdownMenu menulist={categories} placeholder="Select Category" />
        <TagCreate />
      </PostInfoContainer>
      <MyEditor size={[0, 600]} setContent={setContent} />
      <PageFooter />
    </WritePageContainer>
  );
};

const WritePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  position: relative;
  width: 1800px;
`;

const InputBox = styled.div`
  position: relative;
  width: 900px;
`;

const TitleInput = styled.input`
  margin-top: 25px;
  padding: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.bgLayout};
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  border: 0;
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.brLine};
    box-shadow: 0 0 5px rgba(125, 125, 125, 0.5);
  }
`;

const Tooltip = styled.div`
  z-index: 999;
  padding: 6px 12px;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${({ theme }) => theme.shared.tooltip};
  color: ${({ theme }) => theme.shared.tooltipText};
  font-size: 1rem;
  white-space: pre-line;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const SubmitButton = styled(TextButton)`
  margin-bottom: 0;
`;

const PostInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 5px;
  height: 50px;
`;

export default WritePage;
