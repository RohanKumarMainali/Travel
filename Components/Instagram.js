import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'

const Instagram = () => {
  return (
    <div className="container-fluid my-5">
      <div className="d-flex  align-items-center mx-5 py-5">
        <i
          style={{ color: '#5e5e5e', fontSize: '1.6rem' }}
          class="bi bi-instagram mx-2"
        ></i>
        <span style={{ color: '#5e5e5e', fontSize: '2rem', fontWeight: '600' }}>
          Instagram Feed
        </span>
      </div>
      <div className="">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          pagination={{
            el: '.swiper-pagination',
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '@1.70': {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="p-0 m-0">
            <img src="/image/instagram1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-0 m-0">
            <img src="/image/instagram3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-0 m-0">
            <img src="/image/instagram4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-0 m-0">
            <img src="/image/instagram5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-0 m-0">
            <img src="/image/instagram3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-0 m-0">
            <img src="/image/instagram4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-0 m-0">
            <img src="/image/instagram5.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-0 m-0">
            <img src="/image/instagram1.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Instagram
