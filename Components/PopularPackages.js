import React from 'react'
import Style from '../public/css/popularPackage.module.css'

function PopularPackages() {
  return (
    <div className={Style.mainContainer}>
      <div className={`${Style.heading} text-center py-5`}>
        <h1>Our Popular Package</h1>
        <p>
          Choose one of styles or cutomize easily your site following your
          ideas. More demos are coming soon.
        </p>
      </div>
      <div className="container-fluid">
        <div className="row d-flex flex-wrap">
          <div className="col-md-4 px-4 mb-5">
            <img
              style={{ width: '100%' }}
              className="banner-img1 img-thumbnail"
              src="/image/banner-center.png"
              alt=""
            />
            <button className={Style.viewButton}>View</button>
          </div>
          <div className="col-md-4 px-4 mb-5">
            <img
              style={{ width: '100%' }}
              className="banner-img1 img-thumbnail"
              src="/image/banner-left1.png"
              alt=""
            />
            <button className={Style.viewButton}>View</button>
          </div>
          <div className="col-md-4 px-4 mb-5">
            <img
              style={{ width: '100%' }}
              className="banner-img1 img-thumbnail"
              src="/image/banner-left2.png"
              alt=""
            />
            <button className={Style.viewButton}>View</button>
          </div>
          <div className="col-md-4 px-4 mb-5">
            <img
              style={{ width: '100%' }}
              className="banner-img1 img-thumbnail"
              src="/image/banner-right1.png"
              alt=""
            />
            <button className={Style.viewButton}>View</button>
          </div>
          <div className="col-md-4 px-4 mb-5">
            <img
              style={{ width: '100%' }}
              className="banner-img1 img-thumbnail"
              src="/image/banner-right2.png"
              alt=""
            />
            <button className={Style.viewButton}>View</button>
          </div>
          <div className="col-md-4 px-4 mb-5">
            <img
              style={{ width: '100%' }}
              className="banner-img1 img-thumbnail"
              src="/image/banner-left1.png"
              alt=""
            />
            <button className={Style.viewButton}>View</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularPackages
