import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import axios from 'axios'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import SwiperCore, { Autoplay } from 'swiper'
SwiperCore.use([Autoplay])
const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([])

  const getTestimonial = async () => {
    const response = await axios.get('http://127.0.0.1:8000/testimonial/')
    console.log(response.data)
    setTestimonials(response.data)
  }

  useEffect(() => {
    getTestimonial();
  }, [])

  return (
    <div className="testimonial-section my-5 py-5 overflow-hidden">
      <div className="container-fluid px-0">
        <div className="testimonial-wrapper d-flex flex-wrap">
          <div className="testimonial-area ">
            <img
              src="/image/testi-quote.svg"
              className="testi-quote"
              alt="image"
            />
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 3000,
              }}
              loop={true}
            >
                {testimonials.map((testimonial) => {
                  return (
              <SwiperSlide>
                    
                    <>
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
                            <p style={{ fontSize: '1.6rem' }}>
                                {testimonial.description}
                            </p>
                          </div>
                        </div>
                        <div className="testi-author1">
                          <div className="image">
                            <img src={`http://127.0.0.1:8000${testimonial.image}`} 
                                style={{height: '80px', borderRadius:'50%',width:'80px'}}
                            alt="image" />
                          </div>
                          <div className="author-text text-light">
                            <h3>{testimonial.author_name}</h3>
                            <p>South America.</p>
                          </div>
                        </div>
                      </div>
                    </>
              </SwiperSlide>

                  )
                })}
            </Swiper>
          </div>
          <div className="newsletter-area text-light">
            <div className="banner-form-box">
              <h3>Join Newsletter</h3>
              <p>
                Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho
              </p>
              <form className="newsletter-form">
                <div className="form-inner">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-inner">
                  <input type="email" placeholder="Your E-mail" />
                </div>
                <div className="discoverButton">
                  <a>
                    <label>Discover More</label>
                  </a>
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
