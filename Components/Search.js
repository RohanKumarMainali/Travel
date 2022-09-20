import React from 'react'
import { GoLocation } from 'react-icons/go';
import Style from '../public/css/search.module.css'
const Search = () => {
    return (
        <div className="container bg-light p-4" style={{ marginTop: "100px" }}>
            <div className={`row ${Style.row}`}>
                <div className="col-md-3 my-4 col-12 d-flex justify-content-center align-items-center">
                    <GoLocation />
                    <select style={{ outline: 'none', border: "none" }} className={`form-select bg-light mx-2 ${Style.select}`} aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>

                </div>
                <div className="col-md-3  my-4 col-12 d-flex justify-content-center align-items-center">
                    <GoLocation />
                    <select style={{ outline: 'none', border: "none" }}  className={`form-select bg-light mx-2 ${Style.select}`} aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>

                </div>
                <div className="col-md-3  my-4 col-12 d-flex justify-content-center align-items-center">
                    <GoLocation />
                    <select style={{ outline: 'none', border: "none" }}  className={`form-select bg-light mx-2 ${Style.select}`} aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>

                </div>
                <div className="col-md-3  my-4 col-12 d-flex justify-content-center align-items-center">
                    <div className={Style.btn}>
                    <button style={{background:'#6f9a37' , border:'none'}} className={` text-light  ${Style.button}`}>Find More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search