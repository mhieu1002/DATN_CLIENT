import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import axios from "axios";
import {Helmet} from "react-helmet";

const API_URL = "http://localhost:8000";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts/category/Thông báo`);
        setPosts(response.data.reverse());
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="post">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Thông báo</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="container">
        <h2
          style={{ fontSize: "1.8rem", fontWeight: "700", marginTop: "1rem" }}
        >
          Thông báo
        </h2>
        <div style={{ display: "flex" }}>
          <div style={{width: "955px"}}>
            {/* news item */}
            {posts.map((post, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "2rem",
                  width: "95%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    height: "100%",
                  }}
                >
                  <Link to={`/${post.title}`}>
                    <p
                      className="hover"
                      style={{
                        fontSize: "1.6rem",
                        color: "#323232",
                        lineHeight: "2.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      {post.title}
                    </p>
                  </Link>
                  <p
                    style={{
                      fontSize: "1.8rem",
                      color: "#666",
                      marginTop: "1rem",
                    }}
                  >
                    {post.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Post;
