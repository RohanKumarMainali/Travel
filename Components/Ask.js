import React from 'react'

const Ask = () => {
    return (
        <div className="asking-form-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-9 col-md-10">
                        <div className="asking-form-wrap">
                            <div className="section-title1 sibling2">
                                <h2>Feel Free To Ask</h2>
                                <img
                                    src="/image/section-title-vector.svg"
                                    alt="image"
                                />
                            </div>
                            <form className="style-1">
                                <div className="row g-5">
                                    <div className="col-md-6">
                                        <div className="form-inner">
                                            <input type="text" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-inner">
                                            <input type="email" placeholder="Your E-mail" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-inner">
                                            <textarea
                                                name="message"
                                               rows={6}
                                                placeholder="Write your message here.."
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className='discoverButton'>
                                            <a><label>Submit Now</label></a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Ask