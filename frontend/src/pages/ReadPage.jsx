import React, { useEffect, useState } from "react";
import { styled } from "../styles/Theme";
import { useParams } from "react-router-dom";
import axios from "axios";
// Components
import PageHeader from "../layouts/PageHeader";
// Toast UI Viewer
import MyViewer from "../components/MyViewer";

const postURL = "http://127.0.0.1:8000/api/posts/detail/";

const Category = "Category";

const ReadPage = () => {
  const { postId } = useParams(); // URL에서 postID 가져오기
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API 호출하여 포스트 데이터 가져오기
    const getPost = async () => {
      try {
        const response = await axios.get(`${postURL}${postId}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load the post.");
        setLoading(false);
      }
    };

    getPost();
  }, [postId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const dateForm = (date) => {
    const options = { year: "numeric", month: "long", day: "2-digit" };
    return new Date(date).toLocaleDateString("ko-KR", options);
  };

  const createDate = dateForm(post.created_at);
  const updateDate = dateForm(post.created_at);

  return (
    <ReadPageContainer>
      <PageHeader title={post?.title || "Post Title"} />
      <InfoContainer>
        <PostCategory>{Category}</PostCategory>
        <PostDate>{`${createDate}(${updateDate})`}</PostDate>
      </InfoContainer>
      <ViewerContainer>
        <MyViewer Content={post.content} />
      </ViewerContainer>
    </ReadPageContainer>
  );
};

const ReadPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 90%;
  background-color: transparent;
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
  padding: 20px;
  background-color: ${({ theme }) => theme.bgMain};
  border-radius: 4px;
`;

export default ReadPage;
