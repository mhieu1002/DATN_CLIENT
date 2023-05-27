import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <section>
      <div className="container">
        <div className="footer">
          <div className="footer-info">
            <p>PHÂN HIỆU TRƯỜNG ĐH GTVT TẠI TP. HỒ CHÍ MINH</p>
            <p>
              Địa chỉ: 450-451 Lê Văn Việt, Phường Tăng Nhơn Phú A, Tp. Thủ Đức
              (Quận 9 cũ), TP. Hồ Chí Minh
            </p>
            <p>Điện thoại: (028).3896.6798 - (028).7300.1155</p>
            <p>Email: banbientap@utc2.edu.vn</p>
            <p>Fax: (028).3896.4736 - Website: http://utc2.edu.vn</p>
          </div>
          <div className="footer-map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5500892704827!2d106.7915965742235!3d10.84570165791379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527158a0a5b81%3A0xf45c5d34ac580517!2zUGjDom4gaGnhu4d1IFRyxrDhu51uZyDEkOG6oWkgaOG7jWMgR1RWVCB04bqhaSBUcC4gSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1684487997759!5m2!1svi!2s"
              width="650"
              height="210"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="copyright ">
        <p>
          Copyright 2023 © Phân hiệu Trường Đại học GTVT tại TP. Hồ Chí Minh
        </p>
      </div>
    </section>
  );
};

export default Footer;
