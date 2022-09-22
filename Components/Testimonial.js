import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
const Testimonial = () => {
    return (
        <div className="testimonial-section overflow-hidden">
            <div className="container-fluid px-0">
                <div className="testimonial-wrapper d-flex flex-wrap">
                    <div className="testimonial-area ">
                        <img
                            src="/image/testi-quote.svg"
                            className="testi-quote"
                            alt="image" />
                        <Swiper slidesPerView={1}
                            autoplay={
                                {
                                    delay: 3000
                                }}
                            loop={true}>
                            <SwiperSlide>
                                <div className="testimonial-wrap">
                                    <div className="testmonial-banner">
                                        <div className="testmonial-banner-icons">
                                            <i class="bi mx-1 bi-star-fill"></i>
                                            <i class="bi mx-1 bi-star-fill"></i>
                                            <i class="bi mx-1 bi-star-fill"></i>
                                            <i class="bi mx-1 bi-star-fill"></i>
                                            <i class="bi mx-1 bi-star-half"></i>
                                        </div>
                                        <div className="testmonial-banner-para mt-3 text-light">
                                            <p style={{ fontSize: "1.6rem" }}>
                                                “This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas”!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="testi-author1">
                                        <div className="image">
                                            <img src="/image/testi12.png" alt="image" />
                                        </div>
                                        <div className="author-text text-light">
                                            <h3>Johan Martin Sr</h3>
                                            <p>South America.</p>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <div className="newsletter-area text-light">
                        <div className="banner-form-box">
                            <h3>Join Newsletter</h3>
                            <p>Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</p>
                            <form className="newsletter-form">
                                <div className="form-inner">
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="form-inner">
                                    <input type="email" placeholder="Your E-mail" />
                                </div>
                                <div className='discoverButton'>
                                    <a><label>Discover More</label></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testimonial