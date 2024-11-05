// Comment Write Component
import React, { useState } from "react";
import { styled } from "../../../styles/Theme";
// Components
import TextButton from "../../button/TextButton";

const CommentWrite = ({ className }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");

  return (
    <CommentFormContainer className={className}>
      <InfoBox>
        <InputBox>
          <NameInput
            type="text"
            value={name}
            placeholder="이름"
            maxLength={16}
            onChange={(e) => setName(e.target.value)}
          />
          <PasswordInput
            type="text"
            value={password}
            placeholder="비밀번호"
            maxLength={16}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputInfo>{"*16자 제한"}</InputInfo>
        </InputBox>
        <TextButton size={[110, 30]} text={"댓글 작성"} onClick={() => {}} />
      </InfoBox>
      <ContentBox
        type="text"
        value={content}
        placeholder="내용(250자 제한)"
        maxLength={250}
        onChange={(e) => setContent(e.target.value)}
      ></ContentBox>
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
  justify-content: space-between;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  margin: 5px;
  padding: 10px;
  width: 180px;
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

const NameInput = styled(Input)`
  margin-right: 10px;
`;

const PasswordInput = styled(Input)``;

const InputInfo = styled.p`
  display: flex;
  align-items: end;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.bgText};
`;

const ContentBox = styled.textarea`
  margin: 0 5px 5px 5px;
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
