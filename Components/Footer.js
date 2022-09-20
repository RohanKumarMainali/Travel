import React from 'react'
import Style from '../public/css/footer.module.css'
function Footer() {
  return (
    <div className={`container-fluid py-5 d-flex justify-content-center align-items-center flex-column ${Style.container}`}>
      <div className={`my-5 ${Style.first}`}>
        <p>THANKS FOR WATCHING</p>
      </div>
      <div className="second">
        <h1>Do you like this theme? Buy Astrip now!</h1>
      </div>
      <div className={`button mt-3 mb-5 ${Style.button} `}>
        <button className={Style.btn}>Buy This Theme</button>
      <div className={Style.animation}></div>
      </div>
    </div>
  )
}

export default Footer