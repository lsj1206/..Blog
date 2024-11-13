// Post Read Page
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { styled } from "../styles/Theme";
// Components
import PostHeader from "../components/post/PostHeader";
import Comment from "../components/post/comment/Comment";
import IndexNav from "../components/post/IndexNavigation";
import Modal from "../components/Modal";
import TextButton from "../components/button/TextButton";
// Toast UI Viewer
import MyViewer from "../components/post/MyViewer";
// Temp Data
import { tempPost } from "../TempData";
// API
const postURL = "http://127.0.0.1:8000/api/posts/";

const ReadPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams(); // URL에서 postID 가져오기
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);
  const [modal, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const deletePost = async () => {
    try {
      await axios.delete(`${postURL}delete/${postId}`);
      navigate(-1);
    } catch (error) {
      alert("게시물 삭제에 실패했습니다.");
    }
  };

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`${postURL}detail/${postId}`);
        setPost(res.data);
        setError(null);
      } catch (error) {
        setError("글을 불러오는데 실패했습니다.");
        setPost(tempPost);
      }
    };
    getPost();
  }, [postId]);

  return (
    <ReadPageContainer>
      <PostContainer>
        <PostHeader post={post} />
        <ViewerContainer>
          {error && <ErrorText>{error}</ErrorText>}
          {post && <MyViewer Content={post?.content} />} {/* API 호출 후에 Viewer 생성*/}
        </ViewerContainer>
        <Comment postId={post?.id} comments={post?.comments} />
      </PostContainer>
      <SideContainer>
        <SideBox>
          <DeleteButton size={[120, 30]} text={"게시글 삭제"} onClick={openModal} />
          <Modal isOpen={modal} onClose={closeModal}>
            <ErrorText>{`게시글을 삭제하시겠습니까?`}</ErrorText>
            <DeleteButton size={[80, 30]} text={"삭제"} onClick={deletePost} />
          </Modal>
        </SideBox>
        <IndexNav content={post?.content} />
      </SideContainer>
    </ReadPageContainer>
  );
};

const ReadPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  position: relative;
  width: 1800px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1400px;
`;

const ViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const SideContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 60px 50px 50px 50px;
  width: 300px;
  box-sizing: border-box;
`;

const SideBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.brLine};
  border-radius: 15px;
`;

const DeleteButton = styled(TextButton)`
  color: ${({ theme }) => theme.warningText};
  font-size: 1rem;
`;

const ErrorText = styled.h3`
  margin: 10px;
  color: ${({ theme }) => theme.warningText};
  font-size: 1.25rem;
`;

export default ReadPage;
