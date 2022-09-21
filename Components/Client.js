import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

function Client() {
  return (
    <>
      <div class="col-xl-8 col-lg-10 col-md-12 text-center mx-auto mt-4">
        <div class="section-title1">
          <span>ASTRIP PARTNERS</span>
          <h2>Our Most Trusted Travelers</h2>
          <img src="image/durpin.svg" alt="image" />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
      </div>
    </>
  )
}

export default Client
