import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const navlist = [
    {
      display: "Giới thiệu",
    },
    {
      display: "văn bản pháp quy",
    },
    {
      display: "công việc nội bộ",
    },
    {
      display: "đào tạo",
    },
    {
      display: "KHĐNCN",
    },
    {
      display: "Phòng ban/trung tâm",
    },
    {
      display: "khoa/bộ môn",
    },
    {
      display: "đảng/đoàn thể",
    },
    {
      display: "Cựu sinh viên",
    },
    {
      display: "Liên hệ",
    },
  ];

  return (
    <header>
      <div className="header">
        <div className="header-container">
          <div className="header-top">
            <div className="header-logo">
              <Link to="/">
                <img
                  src="https://utc2.edu.vn/upload/company/logo-15725982242.png"
                  alt="description"
                />
              </Link>
            </div>
            <div className="header-search">
              <input type="text" placeholder="Nhập từ khóa cần tìm" />
              <span>Tìm kiếm</span>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="container">
            <nav>
              {navlist.map((item, index) => (
                <a href="/" key={index}>
                  {item.display}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
