import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const Search = () => {
  const { keyword } = useParams();
  const [thongBaoResults, setThongBaoResults] = useState([]);
  const [tinTucResults, setTinTucResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/posts/search?keyword=${keyword}`
        );
        const results = response.data;

        const thongBaoPosts = results.filter(
          (item) => item.category === "Thông báo"
        );
        setThongBaoResults(thongBaoPosts.reverse());

        const tinTucPosts = results.filter(
          (item) => item.category === "Tin tức - sự kiện"
        );
        setTinTucResults(tinTucPosts.reverse());
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchResults();
  }, [keyword]);

  // Hiển thị kết quả tìm kiếm
  return (
    <div className="search">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tìm kiếm nâng cao</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="container">
        <h1
          style={{ fontSize: "1.8rem", fontWeight: "700", marginTop: "2rem" }}
        >
          Kết quả tìm kiếm: {keyword}
        </h1>
        <h2
          style={{ fontSize: "2.2rem", fontWeight: "500", marginTop: "5rem" }}
        >
          Thông báo ({thongBaoResults.length} bài viết)
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {thongBaoResults.map((item, index) => (
            <div
              key={index}
              style={{
                paddingRight: "3rem",
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
                <p
                  style={{
                    fontSize: "1.8rem",
                    color: "#666",
                    marginTop: "4rem",
                  }}
                >
                  {item.date}
                </p>
                <Link to={`/${item.title}`}>
                  <p
                    className="hover"
                    style={{
                      fontSize: "1.6rem",
                      color: "#323232",
                      lineHeight: "2.5rem",
                      fontWeight: "bold",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                      marginTop: "1.5rem",
                    }}
                  >
                    {item.title}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <h2
          style={{ fontSize: "2.2rem", fontWeight: "500", marginTop: "5rem" }}
        >
          Tin tức - sự kiện ({tinTucResults.length} bài viết)
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {tinTucResults.map((item, index) => (
            <div
              key={index}
              style={{
                paddingRight: "3rem",
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
                <p
                  style={{
                    fontSize: "1.8rem",
                    color: "#666",
                    marginTop: "4rem",
                  }}
                >
                  {item.date}
                </p>
                <Link to={`/${item.title}`}>
                  <p
                    className="hover"
                    style={{
                      fontSize: "1.6rem",
                      color: "#323232",
                      lineHeight: "2.5rem",
                      fontWeight: "bold",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                      marginTop: "1.5rem",
                    }}
                  >
                    {item.title}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
