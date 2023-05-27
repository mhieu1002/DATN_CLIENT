import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({ posts: [], news: [] });
  const { posts, news } = data;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, newsResponse] = await Promise.all([
          axios.get("http://localhost:8000/posts/category/Thông báo"),
          axios.get("http://localhost:8000/posts/category/Tin tức - sự kiện"),
        ]);
        setData({
          posts: postsResponse.data.reverse(),
          news: newsResponse.data.reverse(),
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Banner />

      <div className="news">
        <div className="container">
          <div
            style={{
              background:
                "url('https://utc2.edu.vn/media/images/bgthongbao.png') repeat-x center center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.4rem",
                padding: "10px 20px",
                fontWeight: "bold",
                backgroundColor: "#fff",
                width: "25%",
              }}
            >
              <Link
                to="/tin-tuc"
                style={{
                  color: "#281756",
                }}
              >
                TIN TỨC - SỰ KIỆN
              </Link>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              height: "230px",
              overflowY: "scroll",
            }}
          >
            {news.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <Link to={`/${item.title}`}>
                  <img
                    style={{ width: "150px", height: "100px" }}
                    alt="description"
                    src= {item.imageUrl}
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
                  <p style={{ fontSize: "1.8rem", color: "#666" }}>
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
                        WebkitLineClamp: 2,
                      }}
                    >
                      {item.title}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <Link to="/tin-tuc">
            <div
              className="hover"
              style={{
                fontSize: "1.8rem",
                width: "100%",
                marginTop: "2rem",
                color: "#ff9f1c",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Xem thêm
            </div>
          </Link>
        </div>
      </div>

      <div className="post" style={{ backgroundColor: "#e4e4e4" }}>
        <div className="container">
          <div
            style={{
              background:
                "url('https://utc2.edu.vn/media/images/bgthongbao.png') repeat-x center center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "2.4rem",
                padding: "10px 20px",
                fontWeight: "bold",
                backgroundColor: "#e4e4e4",
                width: "20%",
              }}
            >
              <Link
                to="/thong-bao"
                style={{
                  color: "#281756",
                }}
              >
                THÔNG BÁO
              </Link>
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              height: "150px",
              overflowY: "scroll",
            }}
          >
            {posts.map((post, index) => (
              <div
                key={index}
                style={{
                  marginTop: "2rem",
                }}
              >
                <Link to={`/${post.title}`}>
                  <p
                    className="hover"
                    style={{
                      fontSize: "1.8rem",
                      color: "#281756",
                      lineHeight: "2.5rem",
                      fontWeight: "bold",
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                    }}
                  >
                    {post.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          <Link to="/thong-bao">
            <div
              className="hover"
              style={{
                fontSize: "1.8rem",
                width: "100%",
                marginTop: "2rem",
                color: "#ff9f1c",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Xem thêm
            </div>
          </Link>
        </div>
      </div>

      <div>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "370px",
                height: "238px",
                position: "relative",
              }}
            >
              <img
                style={{ width: "100%", cursor: "pointer" }}
                alt="description"
                src="https://utc2.edu.vn/media/images/bgtuyensinh.png"
              />
              <div
                className="hover1"
                style={{
                  position: "absolute",
                  width: "100%",
                  padding: "10px 0",
                  backgroundColor: "rgba(40, 23, 86, 0.7)",
                  color: "#fff",
                  fontSize: "1.8rem",
                  textAlign: "center",
                  bottom: "0",
                  zIndex: "999",
                  cursor: "pointer",
                }}
              >
                <p>TUYỂN SINH</p>
              </div>
            </div>

            <div
              style={{
                width: "370px",
                height: "238px",
                position: "relative",
              }}
            >
              <img
                style={{ width: "100%", cursor: "pointer" }}
                alt="description"
                src="https://utc2.edu.vn/media/images/bgvideo.png"
              />
              <div
                className="hover1"
                style={{
                  position: "absolute",
                  width: "100%",
                  padding: "10px 0",
                  backgroundColor: "rgba(40, 23, 86, 0.7)",
                  color: "#fff",
                  fontSize: "1.8rem",
                  textAlign: "center",
                  bottom: "0",
                  zIndex: "999",
                  cursor: "pointer",
                }}
              >
                <p>THƯ VIỆN ẢNH VÀ VIDEO</p>
              </div>
            </div>

            <div
              style={{
                width: "370px",
                height: "238px",
                position: "relative",
              }}
            >
              <img
                style={{ width: "100%", cursor: "pointer" }}
                alt="description"
                src="https://utc2.edu.vn/media/images/hinh-anh-tot-nghiep.png"
              />
              <div
                className="hover1"
                style={{
                  position: "absolute",
                  width: "100%",
                  padding: "10px 0",
                  backgroundColor: "rgba(40, 23, 86, 0.7)",
                  color: "#fff",
                  fontSize: "1.8rem",
                  textAlign: "center",
                  bottom: "0",
                  zIndex: "999",
                  cursor: "pointer",
                }}
              >
                <p>HÌNH ẢNH TỐT NGHIỆP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img
              style={{
                width: "145px",
                height: "105px",
                cursor: "pointer",
              }}
              src="https://utc2.edu.vn/upload/tinnho/cttvl-1-16824731421.jpg"
              alt="description"
            />
            <img
              style={{
                width: "145px",
                height: "105px",
                cursor: "pointer",
              }}
              src="https://utc2.edu.vn/upload/tinnho/ht-lam-theo-tam-guowng-dao-duc-hcmrecovered-16818742014.jpg"
              alt="description"
            />
            <img
              style={{
                width: "145px",
                height: "105px",
                cursor: "pointer",
              }}
              src="https://utc2.edu.vn/upload/tinnho/hotline-2-16824729813.jpg"
              alt="description"
            />
            <img
              style={{
                width: "145px",
                height: "105px",
                cursor: "pointer",
              }}
              src="https://utc2.edu.vn/upload/tinnho/tt-ddtcgcn-1-16824718241.jpg"
              alt="description"
            />
            <img
              style={{
                width: "145px",
                height: "105px",
                cursor: "pointer",
              }}
              src="https://utc2.edu.vn/upload/tinnho/kenh-gt-16824708182.jpg"
              alt="description"
            />
            <img
              style={{
                width: "145px",
                height: "105px",
                cursor: "pointer",
              }}
              src="https://utc2.edu.vn/upload/tinnho/ktx-1-16824712213.jpg"
              alt="description"
            />
            <img
              style={{
                width: "145px",
                height: "105px",
                cursor: "pointer",
              }}
              src="https://utc2.edu.vn/upload/tinnho/dh-gtvt-16824744852.jpg"
              alt="description"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              className="hover"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#281756",
                justifyContent: "center",
                cursor: "pointer",
                width: "189px",
                height: "142px",
              }}
            >
              <i
                style={{
                  color: "#fff",
                  fontSize: "4rem",
                  width: "100%",
                  textAlign: "center",
                }}
                className="fa-solid fa-book"
              ></i>
              <p
                style={{
                  color: "#fff",
                  fontSize: "1.6rem",
                  marginTop: "1.5rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Thư viện
              </p>
            </span>

            <span
              className="hover"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#f9cb00",
                justifyContent: "center",
                cursor: "pointer",
                width: "189px",
                height: "142px",
              }}
            >
              <i
                style={{
                  color: "#fff",
                  fontSize: "4rem",
                  width: "100%",
                  textAlign: "center",
                }}
                className="fa-solid fa-globe"
              ></i>
              <p
                style={{
                  color: "#fff",
                  fontSize: "1.6rem",
                  marginTop: "1.5rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Dịch vụ công trực tuyến
              </p>
            </span>

            <span
              className="hover"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#fffba3",
                justifyContent: "center",
                cursor: "pointer",
                width: "189px",
                height: "142px",
              }}
            >
              <i
                style={{
                  color: "#281756",
                  fontSize: "4rem",
                  width: "100%",
                  textAlign: "center",
                }}
                className="fa-solid fa-graduation-cap"
              ></i>
              <p
                style={{
                  color: "#281756",
                  fontSize: "1.6rem",
                  marginTop: "1.5rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Chuẩn đầu ra
              </p>
            </span>

            <span
              className="hover"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#f9cb00",
                justifyContent: "center",
                cursor: "pointer",
                width: "189px",
                height: "142px",
              }}
            >
              <i
                style={{
                  color: "#fff",
                  fontSize: "4rem",
                  width: "100%",
                  textAlign: "center",
                }}
                className="fa-regular fa-file-lines"
              ></i>
              <p
                style={{
                  color: "#fff",
                  fontSize: "1.6rem",
                  marginTop: "1.5rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Văn phòng điện tử
              </p>
            </span>

            <span
              className="hover"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#fffba3",
                justifyContent: "center",
                cursor: "pointer",
                width: "189px",
                height: "142px",
              }}
            >
              <i
                style={{
                  color: "#281756",
                  fontSize: "4rem",
                  width: "100%",
                  textAlign: "center",
                }}
                className="fa-solid fa-link"
              ></i>
              <p
                style={{
                  color: "#281756",
                  fontSize: "1.6rem",
                  marginTop: "1.5rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Liên kết web
              </p>
            </span>

            <span
              className="hover"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#281756",
                justifyContent: "center",
                cursor: "pointer",
                width: "189px",
                height: "142px",
              }}
            >
              <i
                style={{
                  color: "#fff",
                  fontSize: "4rem",
                  width: "100%",
                  textAlign: "center",
                }}
                className="fa-solid fa-calendar"
              ></i>
              <p
                style={{
                  color: "#fff",
                  fontSize: "1.6rem",
                  marginTop: "1.5rem",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Lịch công tác tuần
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
