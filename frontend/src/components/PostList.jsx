import React, { useState, useEffect } from "react";
import { styled } from "../styles/Theme";
import axios from "axios";

import PostListItem from "./PostListItem";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/posts/list"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostListItem
          key={post.id}
          title={post.title}
          content={post.content}
          createdAt={post.created_at}
        />
      ))}
    </PostListContainer>
  );
};

const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};

  height: 450px;
  overflow: auto;
`;

export default PostList;
