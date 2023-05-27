import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import axios from "axios";

const API_URL = "http://localhost:8000";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/posts/category/Tin tức - sự kiện`
        );
        setNews(response.data.reverse());
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news">
      <div className="container">
        <h2
          style={{ fontSize: "1.8rem", fontWeight: "700", marginTop: "1rem" }}
        >
          Tin tức
        </h2>
        <div style={{ display: "flex" }}>
          <div style={{ width: "955px" }}>
            {/* news item */}
            {news.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "2rem",
                  width: "95%",
                }}
              >
                <Link to={`/${item.title}`}>
                  <img
                    style={{ width: "150px", height: "100px" }}
                    alt="description"
                    src={item.imageUrl}
                  />
                </Link>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    height: "100%",
                    paddingLeft: "1rem",
                  }}
                >
                  <Link to={`/${item.title}`}>
                    <p
                      className="hover"
                      style={{
                        fontSize: "1.6rem",
                        color: "#323232",
                        lineHeight: "2.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      {item.title}
                    </p>
                  </Link>
                  <p
                    style={{
                      fontSize: "1.8rem",
                      color: "#666",
                      marginTop: "1rem",
                    }}
                  >
                    {item.date}
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

export default News;
