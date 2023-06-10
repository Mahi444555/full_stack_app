import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import cloth from "../../img/cloth.jpg";

import gym1 from "../../img/gym1.jpg";
import shop from "../../img/shop.jpg";
import protin from "../../img/protin.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Our Products</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={cloth} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gym1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={protin} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shop} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
