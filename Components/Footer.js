import React from 'react'
import Style from '../public/css/footer.module.css'
function Footer() {
  return (
    <>
      <div className={`footer-section ${Style.footerContainer}`}>
        <div class="footer-top">
          <div class="container-xl container-lg-fluid container">
            <div class="row justify-content-center gy-5">
              <div class="col-lg-3 col-md-10 col-sm-6 col-11 order-sm-0 order-1">
                <div class="footer-about">
                  <img
                    src="/image/footer-plane.svg"
                    class="footer-plane"
                    alt="image"
                  />
                  <div class="footer1-logo">
                    <img src="/image/footer1-logo.svg" alt="image" />
                    <p>Since: 2022</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    viewBox="0 0 400 400"
                  >
                    <defs>
                      <path
                        d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0"
                        id="txt-path"
                        fill="white"
                      ></path>
                    </defs>
                    <text
                      fill="#DDDDDD"
                      font-size="35.5"
                      font-family="Helvetica Neue"
                      font-weight="600"
                    >
                      <textPath startOffset="0" xlinkHref="#txt-path">
                        Astrip Travel Agency &nbsp; Astrip Travel Agency
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center">
                <div class="footer-item">
                  <h4>Information</h4>
                  <ul class="link-list">
                    <li >
                      <a href="/about" id='a'>About Company</a>
                    </li>
                    <li>
                      <a href="/faq">Online Query</a>
                    </li>
                    <li>
                      <a href="/contact">Become Partner</a>
                    </li>
                    <li>
                      <a href="/contact">Help &amp; Support</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Channels</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center">
                <div class="footer-item">
                  <h4>Destinations</h4>
                  <ul class="link-list">
                    <li>
                      <a href="/destination-details">Grand Switzerland</a>
                    </li>
                    <li>
                      <a href="/destination-details">Beauty of Paris</a>
                    </li>
                    <li>
                      <a href="/destination-details">United States</a>
                    </li>
                    <li>
                      <a href="/destination-details">Wiesbaden Sea</a>
                    </li>
                    <li>
                      <a href="/destination-details">Bangladesh</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center">
                <div class="footer-item">
                  <h4>Reach Us</h4>
                  <ul class="contact-list">
                    <li>
                      <div class="icon">
                        <i class="bi bi-telephone"></i>
                      </div>
                      <div class="text">
                        <a href="tel:+8801761111456">+880 176 1111 456</a>
                        <a href="tel:+8801761111457">+880 176 1111 457</a>
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <i class="bi bi-envelope"></i>
                      </div>
                      <div class="text">
                        <a href="mailto:info@example.com">info@example.com</a>
                        <a href="mailto:support@example.com">
                          support@example.com
                        </a>
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <i class="bi bi-geo-alt"></i>
                      </div>
                      <div class="text">
                        168/170, Avenue 01, Mirpur DOHS, Bangladesh
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row footer-meta">
              <div class="col-lg-6 d-flex justify-content-lg-start justify-content-center align-items-center mb-lg-0 mb-5">
                <h4>Stay Connected:</h4>
                <ul class="footer-social">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i class="bx bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <i class="bx bi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i class="bx bi-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i class="bx bi-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center">
                <h4>Pay Safely With Us!</h4>
                <ul class="pay-list">
                  <li>
                    <img src="/image/pay1.svg" alt="image" />
                  </li>
                  <li>
                    <img src="/image/pay2.svg" alt="image" />
                  </li>
                  <li>
                    <img src="/image/pay3.svg" alt="image" />
                  </li>
                  <li>
                    <img src="/image/pay4.svg" alt="image" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="footer-bottom">
            <div class="row d-flex align-items-center g-3">
              <div class="col-lg-6 d-flex justify-content-lg-start justify-content-center text-lg-start text-center px-1">
                <p>
                  <span>Copyright 2022</span>
                  <a href="#" class="egns-lab">
                    Astrip
                  </a>
                  | Design By
                  <a
                    href="https://themeforest.net/category/site-templates?term=egenslab"
                    class="egns-lab"
                  >
                    Egens Lab
                  </a>
                </p>
              </div>
              <div class="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center">
                <ul class="f-bottom-list d-flex jusify-content-start align-items-center">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
