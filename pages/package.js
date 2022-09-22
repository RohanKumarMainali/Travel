import React from 'react'
import Navbar from '../Components/Navbar'

function packageDetails() {
  return (
    <>
      <Navbar />
      <div id="content" className="site-content">
        <div
          className="hero-interior"
          style={{
            background:
              'url(https://www.myeveresttrip.com/wp-content/uploads/2018/09/My-Everest-Trip-Everest-Base-Camp-Trek--1900x435.jpeg) no-repeat center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="hero-interior__content">
            <div className="container ">
              <h1 className="hero-interior__title ">Everest Base Camp Trek</h1>
              <div className="hero-interior__meta">
                <span>
                  <div className="bi bi-geo-alt-fill"></div>
                  Nepal
                </span>
                <span>
                  <div className="bi bi-brightness-high-fill"></div>
                  14 Days
                </span>
                <span>
                  <div className="bi bi-moon-stars-fill"></div>
                  13 Nights
                </span>
              </div>
            </div>
          </div>
          <div className="quick-contact"></div>
        </div>
      </div>
    </>
  )
}

export default packageDetails
