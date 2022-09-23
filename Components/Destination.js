import React from 'react'
import Style from "../public/css/Destination.module.css"
const Destination = () => {
  return (
    <div className="container-fluid my-5">
      <div className="contentTop text-center py-5">
        <p>DESTINATION</p>
        <h1>Your Desired Destinationn</h1>
        <img src="/image/section-title-vector.svg" alt="" />
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <div className={`${Style.destinationSingle1} mb-4 mx-3`}>
          <img
            src="/image/destnation11.png"
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
        <div className={`${Style.destinationSingle1} mb-4 mx-3`}>
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
        <div className={`${Style.destinationSingle1} mb-4 mx-3`}>
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
        <div className={`${Style.destinationSingle1}mb-4 mx-3`}>
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
        <div className={`${Style.destinationSingle1} my-4 mx-3`}>
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

export default Destination