import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";

const Article = () => {
  const [post, setPost] = useState(null);
  const { title } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/posts/${title}`
        );
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [title]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const { title: postTitle } = post;

  if (postTitle !== title) {
    return <div>Post not found</div>;
  }

  return (
    <div className="article">
      <div className="container">
        <div style={{ display: "flex"}}>
          <div style={{ marginTop: "1.6rem", width: "75%"}}>
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                lineHeight: "2.5rem",
              }}
            >
              {post.title}
            </h2>
            <p
              style={{ fontSize: "1.6rem", lineHeight: "3rem", color: "#666" }}
            >
              Ngày đăng: {post.date}
            </p>
            <div style={{ marginTop: "3rem" }}>
              <audio style={{ width: "100%", height: "35px" }} controls>
                <source type="audio.wav" />
              </audio>
              <div className="write" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Article;
