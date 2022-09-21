import React from 'react'
import Style from '../public/css/Destination.module.css'

function Destination() {
  return (
    <div className={`${Style.container} container-fluid`}>
      <div className={`row ${Style.row}`}>
        <div
          className={`col-md-5 ${Style.leftContainer}`}
          style={{ background: '#54545438' }}
        >
          <span>TRAVEL & TOUR AGENCY</span>
          <h1>Tour Booking And Travel Agency React NextJs Template.</h1>
        </div>
        <div
          className={`col-md-7 py-5`}
          style={{ background: '#54545438'}}
        >
          <div className="banner-right-site px-5 d-flex align-items-center gap-3">
            <div className="left-banner" style={{ width: '507px' }}>
              <img
                style={{ width: '100%' }}
                className="banner-img1 mb-5 img-thumbnail"
                src="/image/banner-left1.png"
                alt=""
              />
              <img
                style={{ width: '100%' }}
                className="img-thumbnail"
                src="/image/banner-left2.png"
                alt=""
              />
            </div>
            <div className="center-banner">
              <img
                className="img-thumbnail"
                src="/image/banner-center.png"
              ></img>
            </div>
            <div className="right-banner" style={{ width: '507px' }}>
              <img
                style={{ width: '100%' }}
                className="img-thumbnail mb-5"
                src="/image/banner-right1.png"
              ></img>
              <img
                style={{ width: '100%' }}
                className="img-thumbnail"
                src="/image/banner-right2.png"
              ></img>
            </div>
          </div>
        </div>
        <div className={`${Style.destinationSingle1} mx-3`}>
          <img
            src="/image/destnation12.png"
            className="destination-img img-fluid"
            alt="image"
          />
          <div className={Style.content}>
            <div className={`text-wrap ${Style.textWrap}`}>
              <h4>
                <a href="/destination-details">Wiesbaden Sea</a>
              </h4>
              <p>40 Tours Place</p>
            </div>
          </div>
        </div>
        <div className={`${Style.destinationSingle1} mx-3`}>
          <img
            src="/image/destnation13.png"
            className="destination-img img-fluid"
            alt="image"
          />
          <div className={Style.content}>
            <div className={`text-wrap ${Style.textWrap}`}>
              <h4>
                <a href="/destination-details">Wiesbaden Sea</a>
              </h4>
              <p>40 Tours Place</p>
            </div>
          </div>
        </div>
        <div className={`${Style.destinationSingle1} mx-3`}>
          <img
            src="/image/destnation14.png"
            className="destination-img img-fluid"
            alt="image"
          />
          <div className={Style.content}>
            <div className={`text-wrap ${Style.textWrap}`}>
              <h4>
                <a href="/destination-details">Wiesbaden Sea</a>
              </h4>
              <p>40 Tours Place</p>
            </div>
          </div>
        </div>
        <div className={`${Style.destinationSingle1} mx-3`}>
          <img
            src="/image/destnation15.png"
            className="destination-img img-fluid"
            alt="image"
          />
          <div className={Style.content}>
            <div className={`text-wrap ${Style.textWrap}`}>
              <h4>
                <a href="/destination-details">Wiesbaden Sea</a>
              </h4>
              <p>40 Tours Place</p>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.btn}>
        <div className={`bg-danger ${Style.discoverButton}`}>
          <a><label>Discover More</label></a>
        </div>
      </div>
    </div>
  )
}

export default Destination;
