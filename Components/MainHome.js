import React from 'react'
import Style from '../public/css/MainHome.module.css'
function MainHome() {
  return (
    <div className={Style.mainContainer}>
       <div className={Style.plane}>
            <img src='image/banner-plane.svg'></img>
          </div>
          
        <div className="container">
          <div className={Style.icon}>
            <img src='image/cloud1.svg'></img>
          </div>
          <div className={Style.icon1}>
            <img src='image/cloud2.svg'></img>
          </div>
            <div className={`row d-flex ${Style.row}`}>
                <div className={`col-md-3 p-5 mt-10 ${Style.leftImage}`}>
                    <img src='image/banner-image1.png'></img>
                </div>
                <div className={`col-md-5 ${Style.mid}`}>
                  <span>LET'S FEEL A YACHT TRIP</span>

                  <h1>The Best Way to Plan Your Trip Around The World</h1>
                  <p>Treat yourself with a journey to your inner self.</p>
                  <div className={Style.discoverButton}>
                    <a><label>Discover More</label></a>
                  </div>
                </div>
                <div className={`col-md-4 ${Style.col4}`}>
                    <img src='image/banner-image2.png'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainHome