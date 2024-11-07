// Comment Write Component
import React, { useState } from "react";
import axios from "axios";
import { styled } from "../../../styles/Theme";
// Components
import TextButton from "../../button/TextButton";
// API
const commentURL = "http://127.0.0.1:8000/api/comment/create/";

const CommentWrite = ({ className, postId }) => {
  const [content, setContent] = useState("");

  const submitComment = async () => {
    if (!content) {
      alert("내용은 필수입니다.");
      return;
    }

    try {
      // 게시글 데이터 전송
      const CommentData = { content };
      await axios.post(`${commentURL}${postId}`, CommentData, {
        headers: { "Content-Type": "application/json" },
      });

      alert("댓글이 성공적으로 저장되었습니다.");
    } catch (error) {
      console.error("Error:", error);
      alert("Error status: " + error.response.status);
    }
  };

  return (
    <CommentFormContainer className={className}>
      <ContentBox
        type="text"
        value={content}
        placeholder="내용"
        maxLength={400}
        onChange={(e) => setContent(e.target.value)}
      />
      <InfoBox>
        <InfoText>{"*400자 제한"}</InfoText>
        <SubmitButton size={[80, 40]} text={`작성`} onClick={submitComment} />
      </InfoBox>
    </CommentFormContainer>
  );
};

const CommentFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 10px;
  width: 1200px;
  min-height: 14vh;
  max-height: 14vh;
  background-color: ${({ theme }) => theme.bgLayout};
  border: 0;
  border-radius: 4px;
`;

const ContentBox = styled.textarea`
  margin: 5px;
  padding: 10px;
  resize: none;
  width: 1100px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bgMainSub};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
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
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
`;

const SubmitButton = styled(TextButton)`
  margin: 0;
  font-size: 1.1rem;
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.btnText};
  font-size: 0.85rem;
`;

export default CommentWrite;
