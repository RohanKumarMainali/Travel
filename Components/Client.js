import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

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
      <div className="container mb-5">
        <div className="row justify-content-center">
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            loop={true}
        
            pagination={{
              clickable: true,
              
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="partner-single">
                <img src="image/partner1.svg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-single">
                <img src="image/partner2.svg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-single">
                <img src="image/partner3.svg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-single">
                <img src="image/partner4.svg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-single">
                <img src="image/partner5.svg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="partner-single">
                <img src="image/partner1.svg" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Client
