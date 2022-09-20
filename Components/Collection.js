import React from 'react';
import Style from "../public/css/collection.module.css"
const Collection = () => {
    return (
        <div className='container my-5'>
            <div className="texts d-flex my-5 justify-content-center align-items-center">
                <span className={Style.span1}>13</span>
                <div className="content mx-3" style={{width:'45%'}}>
                    <h1>Attractive Inner Pages
                    </h1>
                    <span className={Style.span2}>  Choose one of styles or cutomize easily your site following your ideas. More demos are coming soon.</span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <img style={{width:'100%'}} src="/image/banner-left1.png" alt="" />
                </div>
                <div className="col-md-4 col-sm-12">
                    <img style={{width:'100%'}} src="/image/banner-left1.png" alt="" />
                </div>
                <div className="col-md-4 col-sm-12">
                    <img style={{width:'100%'}} src="/image/banner-left1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Collection