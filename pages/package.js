import React from 'react'
import Navbar from '../Components/Navbar'

function packageDetails() {
  return (
    <>
    <Navbar/>
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
                  <svg className="icon icon-destination" aria-hidden="true">
                    <use
                      xlinkHref="https://www.myeveresttrip.com/wp-content/themes/lds_travel/assets/images/symbol-defs.svg#icon-destination"
                      x={0}
                      y={0}
                    />
                  </svg>
                  Nepal
                </span>
                <span>
                  <svg className="icon icon-day" aria-hidden="true">
                    <use
                      xlinkHref="https://www.myeveresttrip.com/wp-content/themes/lds_travel/assets/images/symbol-defs.svg#icon-day"
                      x={0}
                      y={0}
                    />
                  </svg>
                  14 Days
                </span>
                <span>
                  <svg className="icon icon-night" aria-hidden="true">
                    <use
                      xlinkHref="https://www.myeveresttrip.com/wp-content/themes/lds_travel/assets/images/symbol-defs.svg#icon-night"
                      x={0}
                      y={0}
                    />
                  </svg>
                  13 Nights
                </span>
              </div>
            </div>
          </div>
          <div className="quick-contact">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default packageDetails
