// 게시글 내용을 읽는 페이지

// 다시 작성해야함
// post_id를 받아와야함.

import React, { useEffect, useState } from "react";
import { styled } from "../styles/Theme";
import { useParams } from "react-router-dom";
import axios from "axios";
// Toast UI Editor Viewer
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css"; // default CSS

import PageHeader from "../layouts/PageHeader";

const ReadPage = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API 호출하여 포스트 데이터 가져오기
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/posts/detail/8`
        );
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load the post.");
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  if (loading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <ReadPageContainer>
      <PageHeader title={post?.title || "Post Detail"} />
      {post && (
        <>
          <PostInfo>
            <PostDate>
              {new Date(post.created_at).toLocaleDateString()}
            </PostDate>
          </PostInfo>
          <ViewerContainer>
            <Viewer initialValue={post.content || ""} />
          </ViewerContainer>
        </>
      )}
    </ReadPageContainer>
  );
};

const ReadPageContainer = styled.div`
  margin-left: 20px;
  width: 90%;
  background-color: transparent;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PostDate = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
`;

const ViewerContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
`;

const LoadingMessage = styled.p`
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

export default ReadPage;
