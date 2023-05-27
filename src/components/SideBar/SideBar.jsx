import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.scss";
import axios from "axios";

const API_URL = "http://localhost:8000";

const PostItem = ({ post }) => (
  <div style={{ marginTop: "1.5rem", paddingRight: ".5rem" }}>
    <Link className="hover" to={`/${post.title}`} style={{ color: "#000" }}>
      <span>
        {post.title}
        <p style={{ fontSize: "1.4rem" }}>{post.date}</p>
      </span>
    </Link>
  </div>
);

const SideBar = () => {
  const [minPosts, setMinPosts] = useState([]);
  const [minNews, setMinNews] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async (category, setMinData) => {
    try {
      const response = await axios.get(`${API_URL}/posts/category/${category}`);
      const data = response.data;
      const startIndex = data.length - 4;
      const endIndex = data.length;
      const sortedData = data.slice(startIndex, endIndex).reverse();
      setMinData(sortedData);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData("Thông báo", setMinPosts);
    fetchData("Tin tức - sự kiện", setMinNews);
  }, []);

  if (error) {
    console.log(error);
    // Render error message or fallback UI
  }

  return (
    <div className="sidebar">
      <h2>Tin tức - Sự kiện</h2>
      {minNews.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}

      <h2 style={{ marginTop: "2rem" }}>Thông báo</h2>
      {minPosts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
};

export default SideBar;
