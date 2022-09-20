import React from 'react'
import { AiOutlineMobile } from 'react-icons/ai';
import Style from "../public/css/feature.module.css";
const Feature = () => {
    console.log(Style)
    return (
        <div className="container mt-5">
            <div className="texts text-center py-5">
                <h1>Core Features</h1>
                <p>Choose one of styles or cutomize easily your site following your ideas. More demos are coming soon.</p>
            </div>
            <div className="row text-center">
                <div className={`col-md-4 ${Style.main} mt-5 d-flex justify-content-center align-items-center flex-column`}>
                    <div style={{ width: '100px', height: "100px", border: "2px solid #90b956" }} className={`logo mb-3 d-flex justify-content-center align-items-center rounded-circle ${Style.divICON}`}>
                        <AiOutlineMobile className={Style.icon} ></AiOutlineMobile>
                    </div>
                    <div className={Style.content}>
                        <h4>Fully Responsive Layout</h4>
                        <p>Choose one of styles or cutomize easily your sitesi More demos are coming soon.</p>
                    </div>
                </div>
                <div className={`col-md-4 ${Style.main} mt-5 d-flex justify-content-center align-items-center flex-column`}>
                    <div style={{ width: '100px', height: "100px", border: "2px solid #90b956" }} className={`logo mb-3 d-flex justify-content-center align-items-center rounded-circle ${Style.divICON}`}>
                        <AiOutlineMobile className={Style.icon} ></AiOutlineMobile>
                    </div>
                    <div className={Style.content}>
                        <h4>Fully Responsive Layout</h4>
                        <p>Choose one of styles or cutomize easily your sitesi More demos are coming soon.</p>
                    </div>
                </div>
                <div className={`col-md-4 ${Style.main} mt-5 d-flex justify-content-center align-items-center flex-column`}>
                    <div style={{ width: '100px', height: "100px", border: "2px solid #90b956" }} className={`logo mb-3 d-flex justify-content-center align-items-center rounded-circle ${Style.divICON}`}>
                        <AiOutlineMobile className={Style.icon} ></AiOutlineMobile>
                    </div>
                    <div className={Style.content}>
                        <h4>Fully Responsive Layout</h4>
                        <p>Choose one of styles or cutomize easily your sitesi More demos are coming soon.</p>
                    </div>
                </div>
                <div className={`col-md-4 ${Style.main} mt-5 d-flex justify-content-center align-items-center flex-column`}>
                    <div style={{ width: '100px', height: "100px", border: "2px solid #90b956" }} className={`logo mb-3 d-flex justify-content-center align-items-center rounded-circle ${Style.divICON}`}>
                        <AiOutlineMobile className={Style.icon} ></AiOutlineMobile>
                    </div>
                    <div className={Style.content}>
                        <h4>Fully Responsive Layout</h4>
                        <p>Choose one of styles or cutomize easily your sitesi More demos are coming soon.</p>
                    </div>
                </div>
                <div className={`col-md-4 ${Style.main} mt-5 d-flex justify-content-center align-items-center flex-column`}>
                    <div style={{ width: '100px', height: "100px", border: "2px solid #90b956" }} className={`logo mb-3 d-flex justify-content-center align-items-center rounded-circle ${Style.divICON}`}>
                        <AiOutlineMobile className={Style.icon} ></AiOutlineMobile>
                    </div>
                    <div className={Style.content}>
                        <h4>Fully Responsive Layout</h4>
                        <p>Choose one of styles or cutomize easily your sitesi More demos are coming soon.</p>
                    </div>
                </div>
                <div className={`col-md-4 ${Style.main} mt-5 d-flex justify-content-center align-items-center flex-column`}>
                    <div style={{ width: '100px', height: "100px", border: "2px solid #90b956" }} className={`logo mb-3 d-flex justify-content-center align-items-center rounded-circle ${Style.divICON}`}>
                        <AiOutlineMobile className={Style.icon} ></AiOutlineMobile>
                    </div>
                    <div className={Style.content}>
                        <h4>Fully Responsive Layout</h4>
                        <p>Choose one of styles or cutomize easily your sitesi More demos are coming soon.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Feature