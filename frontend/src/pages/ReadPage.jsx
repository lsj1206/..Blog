import React, { useEffect, useState } from "react";
import { styled } from "../styles/Theme";
import { useParams } from "react-router-dom";
import axios from "axios";
// Components
import PageHeader from "../layouts/PageHeader";
// Toast UI Viewer
import MyViewer from "../components/MyViewer";

const postURL = "http://127.0.0.1:8000/api/posts/detail/";

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

  return (
    <ReadPageContainer>
      <PageHeader title={post?.title || "Post Title"} />
      {post && (
        <>
          <InfoContainer>
            <PostDate>
              {new Date(post.created_at).toLocaleDateString()}
            </PostDate>
          </InfoContainer>
          <ViewerContainer>
            <MyViewer Content={post.content} />
          </ViewerContainer>
        </>
      )}
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
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PostDate = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.bgText};
`;

const ViewerContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.bgMain};
  color: blue;
  border-radius: 4px;
`;

export default ReadPage;
