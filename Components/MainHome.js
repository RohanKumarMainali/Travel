import React from 'react'
import Style from '../public/css/MainHome.module.css'
function MainHome() {
  return (
    <div className={Style.mainContainer}>
        <div className="container">
            <div className="row">
                <div className="col-md-3 p-5 mt-10">
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
                <div className="col-md-4">
                    <img src='image/banner-image2.png'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainHome