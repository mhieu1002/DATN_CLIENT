import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Helmet} from "react-helmet";
import SideBar from "../components/SideBar/SideBar";
import "react-quill/dist/quill.core.css";

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

  console.log(post);

  if (!post) {
    return <div>Loading...</div>;
  }

  const { title: postTitle } = post;

  if (postTitle !== title) {
    return <div>Post not found</div>;
  }

  return (
    <div className="article">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.title}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="container">
        <div style={{ display: "flex" }}>
          <div style={{ marginTop: "1.6rem", width: "75%" }}>
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
              style={{
                fontSize: "1.6rem",
                lineHeight: "3.5rem",
                color: "#666",
                fontStyle: "italic",
              }}
            >
              Ngày đăng: {post.date} - Lượt xem: {post.views}
            </p>
            <div style={{ marginTop: "3rem" }}>
              <audio
                style={{ width: "100%", height: "35px" }}
                controls
                autoPlay
              >
                <source src={post.audioUrl} type="audio/wav" />
              </audio>
              <div
                className="write view ql-editor"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </div>
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Article;
