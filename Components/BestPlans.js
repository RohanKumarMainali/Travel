import React from 'react'
function BestPlans() {
  return (
    <>
      <div class="col-xl-8 col-lg-10 col-md-12 text-center mx-auto mt-4">
        <div class="section-title1">
          <span>Choose Your Tour</span>
          <h2>Get The Best Plans For Your’s</h2>
          <img src="image/durpin.svg" alt="image" />
        </div>
      </div>

      <div className="container">
        <div className="container px-5">
          <div className="row justify-content-center g-4">
            <div className={`col-md-4 col-sm-8 best-plan`}>
              <div className='best-plan-single1'>
                  <img
                    style={{ width: '100%' }}
                    className="banner-img1 img-thumbnail img-fluid"
                    src="/image/best-plan21.png"
                    alt=""
                  />

                <div class="content">
                  <p>From $200</p>
                  <h4>
                    <a href="/tour-package-details">
                      Bangkok &amp; Krabi Even Bette
                    </a>
                  </h4>
                  <div class="best-plan-meta">
                    <span class="duration">
                      <i class="bi bi-clock"></i>2 days 3 night
                    </span>
                    <span class="rating">
                      <i class="bi bi-star-fill"></i>4.8 (150)
                    </span>
                  </div>
                  <div class="list-area">
                    <h5>Free Package Facility:</h5>
                    <ul class="plan-list1">
                      <li>Free Best Tour Guided</li>
                      <li>Free Messages</li>
                      <li>No Booking Charge</li>
                      <li>Best Rate Gurantee</li>
                    </ul>
                  </div>
                  <div className="discoverButtonReverse">
                  <a>
                    <label>Explore More</label>
                  </a>
                </div>
                </div>
              </div>
            </div>

            <div className={`col-md-4 col-sm-8 best-plan`}>
              <div className='best-plan-single1'>
                  <img
                    style={{ width: '100%' }}
                    className="banner-img1 img-thumbnail img-fluid"
                    src="/image/best-plan22.png"
                    alt=""
                  />

                <div class="content">
                  <p>From $200</p>
                  <h4>
                    <a href="/tour-package-details">
                      Bangkok &amp; Krabi Even Bette
                    </a>
                  </h4>
                  <div class="best-plan-meta">
                    <span class="duration">
                      <i class="bi bi-clock"></i>2 days 3 night
                    </span>
                    <span class="rating">
                      <i class="bi bi-star-fill"></i>4.8 (150)
                    </span>
                  </div>
                  <div class="list-area">
                    <h5>Free Package Facility:</h5>
                    <ul class="plan-list1">
                      <li>Free Best Tour Guided</li>
                      <li>Free Messages</li>
                      <li>No Booking Charge</li>
                      <li>Best Rate Gurantee</li>
                    </ul>
                  </div>
                  <div className="discoverButtonReverse">
                  <a>
                    <label>Explore More</label>
                  </a>
                </div>
                </div>
              </div>
            </div>

            <div className={`col-md-4 col-sm-8 best-plan`}>
              <div className='best-plan-single1'>
                  <img
                    style={{ width: '100%' }}
                    className="banner-img1  img-fluid"
                    src="/image/best-plan23.png"
                    alt=""
                  />

                <div class="content">
                  <p>From $200</p>
                  <h4>
                    <a href="/tour-package-details">
                      Bangkok &amp; Krabi Even Bette
                    </a>
                  </h4>
                  <div class="best-plan-meta">
                    <span class="duration">
                      <i class="bi bi-clock"></i>2 days 3 night
                    </span>
                    <span class="rating">
                      <i class="bi bi-star-fill"></i>4.8 (150)
                    </span>
                  </div>
                  <div class="list-area">
                    <h5>Free Package Facility:</h5>
                    <ul class="plan-list1">
                      <li>Free Best Tour Guided</li>
                      <li>Free Messages</li>
                      <li>No Booking Charge</li>
                      <li>Best Rate Gurantee</li>
                    </ul>
                  </div>
                  <div className="discoverButtonReverse">
                  <a>
                    <label>Explore More</label>
                  </a>
                </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* <Swiper
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
      </Swiper> */}
        <div className="row"></div>
      </div>
    </>
  )
}

export default BestPlans
