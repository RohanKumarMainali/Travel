import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import Style from '../public/css/sticky.module.css'
const Sticky = () => {
    return (
        
        <div className={`mt-120 p-0 ${Style.sectionVideo}`}>
            <div className="container">
                <div className="row justify-content-center align-items-center g-4">
                    <div className="col-lg-7 col-md-10">
                        <div className={Style.videosectioncontent}>
                            <span>Feel The Vibe</span>
                            <img src="/image/fly-shape1.svg" alt="image" />
                            <h2>Life Begins at The End of Your Comfort Zone.</h2>
                            <p className="para">
                                Lorem ipsum dolor sit amet, consectetur adi- piscing elit. sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim. Exercitation ullam laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                            <a className="eg-btn btn--primary btn--lg" href="/destination">
                                Discover More
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-10 d-flex justify-content-lg-end justify-content-center">
                        <div className={Style.videowrapper}>
                            <div className={Style.videoplay}>
                                <a
                                    className="popup-youtube video-icon"
                                    style={{ cursor: "pointer" }}
                                >
                                    <BsFillPlayCircleFill />
                                </a>
                            </div>
                            <span className={Style.watchvideo}>Watch Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sticky