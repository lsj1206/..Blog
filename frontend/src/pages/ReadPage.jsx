import React, { useEffect, useState } from "react";
import { styled } from "../styles/Theme";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// Components
import PageHeader from "../layouts/PageHeader";
import PageFooter from "../layouts/PageFooter";
// Toast UI Viewer
import MyViewer from "../components/post/MyViewer";

import TextButton from "../components/button/TextButton";

const postURL = "http://127.0.0.1:8000/api/posts/";

const Category = "Category";

const ReadPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams(); // URL에서 postID 가져오기
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const deletePost = async () => {
    try {
      const response = await axios.delete(`${postURL}delete/${postId}`);
      setPost(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed Delete Post");
      setLoading(false);
    }
    navigate(-1);
  };

  useEffect(() => {
    // API 호출하여 포스트 데이터 가져오기
    const getPost = async () => {
      try {
        const response = await axios.get(`${postURL}detail/${postId}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to Load the Post");
        setLoading(false);
      }
    };

    getPost();
  }, [postId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const createDate = formatDate(post.created_at);
  const updateDate = formatDate(post.created_at);

  return (
    <ReadPageContainer>
      <PageHeader children={<Title>{post?.title || "게시글 제목"}</Title>} />
      <InfoContainer>
        <PostCategory>{Category}</PostCategory>
        <PostDate>{`${createDate}(${updateDate})`}</PostDate>
      </InfoContainer>
      <ViewerContainer>
        <MyViewer Content={post.content} />
      </ViewerContainer>
      <PageFooter>
        {/* 댓글 영역 */}
        <DeleteButton size={[120, 30]} text={"게시글 삭제"} onClick={deletePost} />
      </PageFooter>
    </ReadPageContainer>
  );
};

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return new Date(date).toLocaleDateString("ko-KR", options);
};

const ReadPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 90%;
  background-color: transparent;
`;

const Title = styled.h2`
  padding-top: 25px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

const PostCategory = styled.h5`
  margin-left: 10px;
  margin-right: 20px;
  color: ${({ theme }) => theme.bgText};
`;

const PostDate = styled.h5`
  margin-right: 20px;
  color: ${({ theme }) => theme.bgText};
`;

const ViewerContainer = styled.div`
  padding: 10px;
  width: 90%;
  background-color: ${({ theme }) => theme.bgMain};
  border-radius: 4px;
`;

const DeleteButton = styled(TextButton)`
  color: ${({ theme }) => theme.warningText};
`;

export default ReadPage;
