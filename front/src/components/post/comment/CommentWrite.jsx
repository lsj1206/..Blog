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
        placeholder="내용(250자 제한)"
        maxLength={250}
        onChange={(e) => setContent(e.target.value)}
      ></ContentBox>
      <InfoBox>
        <TextButton size={[110, 30]} text={"댓글 작성"} onClick={submitComment} />
      </InfoBox>
    </CommentFormContainer>
  );
};

const CommentFormContainer = styled.form`
  width: 1150px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgSub};
  border: 0;
  border-radius: 4px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-end;
`;

const ContentBox = styled.textarea`
  margin: 5px;
  padding: 10px;
  resize: none;
  width: 99%;
  height: 14vh;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bgLayout};
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  border: 0;
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.brLine};
    box-shadow: 0 0 5px rgba(125, 125, 125, 0.5);
  }
`;

export default CommentWrite;
