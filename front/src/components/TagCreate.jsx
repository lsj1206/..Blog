// Tag Create Component
import React, { useState } from "react";
import { styled } from "../styles/Theme";

const TagCreate = () => {
  const [tagList, setTagList] = useState([]);
  const [tag, setTag] = useState("");
  const [toolTip, setToolTip] = useState(false);

  const setKeyDown = (e) => {
    if (e.key === "Enter" && tag.trim() !== "") {
      e.preventDefault();
      setTagList([...tagList, tag.trim()]);
      setTag("");
    }
  };

  const removeTag = (indexToRemove) => {
    setTagList(tagList.filter((_, index) => index !== indexToRemove));
  };

  return (
    <TagCreateContainer>
      {tagList.map((tag, index) => (
        <Tag key={index} onClick={() => removeTag(index)}>
          <TagText>{tag}</TagText>
        </Tag>
      ))}
      <InputBox onMouseLeave={() => setToolTip(false)}>
        <TagInput
          type="text"
          value={tag}
          placeholder="태그 생성"
          maxLength={20}
          onChange={(e) => setTag(e.target.value)}
          onFocus={() => setToolTip(true)}
          onKeyDown={setKeyDown}
        />
        {toolTip && <Tooltip>{`엔터 키를 눌러 태그를 생성하세요.\n태그를 클릭하여 삭제합니다.`}</Tooltip>}
      </InputBox>
    </TagCreateContainer>
  );
};

const TagCreateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.bgLayout};
  color: ${({ theme }) => theme.highlightText};
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
`;

const TagText = styled.span`
  margin-right: 8px;
`;

const InputBox = styled.div`
  position: relative;
`;

const TagInput = styled.input`
  padding: 8px;
  width: 80px;
  background-color: ${({ theme }) => theme.bgLayout};
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

const Tooltip = styled.div`
  z-index: 999;
  padding: 6px 12px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 15rem;
  background-color: ${({ theme }) => theme.shared.tooltip};
  color: ${({ theme }) => theme.shared.tooltipText};
  font-size: 0.9rem;
  white-space: pre-line;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export default TagCreate;
