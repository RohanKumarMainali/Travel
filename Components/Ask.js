import axios from 'axios'
import React from 'react'

const Ask = () => {
    const[fname, setFname] = React.useState('')
    const[email, setEmail] = React.useState('')
    const[msg, setMsg] = React.useState('')
    const postFeedback = async () => {
        try {
            const res = await axios.post('http://localhost:8000/feedback-post/', {
                fname, email, msg
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
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
                                            <input onChange={e => setFname(e.target.value)} type="text" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-inner">
                                            <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Your E-mail" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-inner">
                                            <textarea
                                                onChange={e => setMsg(e.target.value)}
                                                name="message"
                                                rows={6}
                                                placeholder="Write your message here.."
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className='discoverButton'>
                                            <button onClick={postFeedback}><label>Submit Now</label></button>
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