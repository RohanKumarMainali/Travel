import React from 'react'
import { FaHiking } from 'react-icons/fa';
import Style from "../public/css/type.module.css"

const Types = () => {

    return (
        <div className="container my-5">
            <div className="contentTop my-5 text-center">
                <p>TRAVEL CATEGORY</p>
                <h1>Our Popular Tours Type</h1>
                <img src="/image/section-title-vector.svg" alt="" />
            </div>
            <div className="d-flex justify-content-center flex-wrap align-items-center ">
                <div className={`mx-2 my-3  ${Style.item}`}>
                    <div className={`icons mx-auto  d-flex justify-content-center align-items-center rounded-circle ${Style.icondiv}`}>
                        <div className={Style.animi}>
                            <FaHiking className={Style.icon} />
                        </div>
                    </div>
                    <div className="text mt-3">
                        <h4 className='text-center'>Adventure</h4>
                    </div>
                </div>
                <div className={` mx-2 my-3  ${Style.item}`}>
                    <div className={`icons mx-auto  d-flex justify-content-center align-items-center rounded-circle ${Style.icondiv}`}>
                        <div className={Style.animi}>
                            <FaHiking className={Style.icon} />
                        </div>
                    </div>
                    <div className="text mt-3">
                        <h4 className='text-center'>Adventure</h4>
                    </div>
                </div>
                <div className={`mx-2  my-3  ${Style.item}`}>
                    <div className={`icons mx-auto  d-flex justify-content-center align-items-center rounded-circle ${Style.icondiv}`}>
                        <div className={Style.animi}>
                            <FaHiking className={Style.icon} />
                        </div>
                    </div>
                    <div className="text mt-3">
                        <h4 className='text-center'>Adventure</h4>
                    </div>
                </div>
                <div className={`mx-2 my-3   ${Style.item}`}>
                    <div className={`icons mx-auto  d-flex justify-content-center align-items-center rounded-circle ${Style.icondiv}`}>
                        <div className={Style.animi}>
                            <FaHiking className={Style.icon} />
                        </div>
                    </div>
                    <div className="text mt-3">
                        <h4 className='text-center'>Adventure</h4>
                    </div>
                </div>
                <div className={`mx-2   my-3 ${Style.item}`}>
                    <div className={`icons mx-auto  d-flex justify-content-center align-items-center rounded-circle ${Style.icondiv}`}>
                        <div className={Style.animi}>
                            <FaHiking className={Style.icon} />
                        </div>
                    </div>
                    <div className="text mt-3">
                        <h4 className='text-center'>Adventure</h4>
                    </div>
                </div>
                <div className={`mx-2  my-3  ${Style.item}`}>
                    <div className={`icons mx-auto  d-flex justify-content-center align-items-center rounded-circle ${Style.icondiv}`}>
                        <div className={Style.animi}>
                            <FaHiking className={Style.icon} />
                        </div>
                    </div>
                    <div className="text mt-3">
                        <h4 className='text-center'>Adventure</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Types