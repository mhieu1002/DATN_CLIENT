import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img
              src={
                "https://res.cloudinary.com/dhypn6jgk/image/upload/v1682666111/IT_UTC2/Logo_Banner/343747645_465747852400946_6440733867970833835_n.jpg_siptkl.jpg"
              }
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={
                "https://utc2.edu.vn/upload/hinhanh/artboard3kvvacsvc16577821170-16695322343.png"
              }
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={"https://utc2.edu.vn/upload/hinhanh/bh-web-16833727167.jpg"}
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
