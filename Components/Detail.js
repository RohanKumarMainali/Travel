import React from 'react'

const Detail = (props) => {
  const parse = require('html-react-parser')
  var included = props?.singlePackage?.package_included.split(',')
  var excluded = props?.singlePackage?.package_excluded.split(',')
  let FAQs = props.FAQ

  return (
    <div className="container detailcont my-5  py-5">
      <div className="row">
        <div className="col-md-8">
          <div id="overview" className="col-md-12 border mb-4 p-4">
            <h3 className="fw-bold">Overview</h3>
            <hr className="px-4" />
            <p>{parse(`${props?.singlePackage?.description}`)}</p>
          </div>
          <div id="itinerary" className="border mb-4 p-4">
            <h3 className="fw-bolder">Your Itinerary</h3>
            <hr className="px-4" />

            {props?.packageDays?.map((element) => {
              return (
                <>
                  <div className="detail">
                    <h5 className="text-secondary fw-bold">{element.title}</h5>
                    <p>{element.description}</p>
                  </div>
                </>
              )
            })}
          </div>

          {props?.singlePackage?.additional_information ? (
            <>
              <div id="trip-additional-info" className="border p-4">
                <h3 className="fw-bold">Additional Info</h3>
                <hr className="px-4" />
                <div className="detail">
                  <p>
                    {parse(`${props?.singlePackage?.additional_information}`)}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="border mt-5">
            <div className="container mt-5  display-flex include-exclue">
              <div className="row">
                <div className="col-md-6">
                  <div class="box box--half">
                    <div class="box__item">
                      <div class="box__heading">
                        <h2>What's included</h2>
                      </div>
                      <div class="includes">
                        {included?.map((data) => {
                          return (
                            <div>
                              <ul>
                                <li>
                                  <div class="bi bi-check-circle-fill mr-3"></div>
                                  {data}
                                  {console.log(data)}
                                </li>
                              </ul>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="box__item">
                    <div class="box__heading">
                      <h2>What's not included</h2>
                    </div>
                    {excluded?.map((data) => {
                      return (
                        <div class="excludes">
                          <ul>
                            <li>
                              <div class="bi bi-x-circle-fill"></div>
                              {data}
                            </li>
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="border mt-5 mb-4 p-4">
            <h3 className="fw-bolder">FAQ</h3>
            <hr className="px-4" />
            {FAQs?.map((FAQ) => {
              return (
                <div className="detail">
                  <h5 className=" fw-bold">{FAQ.question}</h5>
                  <p>{FAQ.answer}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div style={{ position: 'relative' }} className="col-md-4 bg-light ">
          <div
            style={{ top: '10%', display: 'unset' }}
            className="package px-4 position-sticky "
          >
            <div className="package px-4 mt-3 px-4">
              <h4>Package Summary</h4>
              <hr className="px-4" />
            </div>
            <div className="package px-4">
              <div className="dt d-flex align-items-center">
                <p className="me-2">package Includes:</p>
                <i
                  style={{ color: '#90b956' }}
                  class="bi h3 mx-1 bi-bicycle"
                ></i>
                <i
                  style={{ color: '#90b956' }}
                  class="bi h3 mx-1 bi-bicycle"
                ></i>
                <i
                  style={{ color: '#90b956' }}
                  class="bi h3 mx-1 bi-bicycle"
                ></i>
                <i
                  style={{ color: '#90b956' }}
                  class="bi h3 mx-1 bi-bicycle"
                ></i>
              </div>
              <hr className="px-4" />
            </div>
            <div className="package px-4">
              <h5>Highlights of Everest Base Camp Trek</h5>
              <hr className="px-4" />
            </div>
            <div className="package px-4">
              <div className="dt d-flex">
                <i
                  style={{ color: '#90b956' }}
                  class="bi me-2 h5 bi-check-circle-fill"
                ></i>
                <p>
                  Experience the Lukla flight to one of the most Adventures
                  airports in the world, Tenzing-Hillary Airport{' '}
                </p>
              </div>
              <hr className="px-4" />
            </div>
            <div className="package px-4">
              <div className="dt d-flex justify-content-between">
                <p className="h5">Package Price</p>
                <p className="h5">USD $1194</p>
              </div>
              <hr />
            </div>
            <div className="package px-4">
              <p className="h5 fw-bolder">Join Our Fixed Departures</p>
              <hr className="px-4" />
            </div>
            <div
              style={{ height: '25vh', overflowY: 'scroll' }}
              className="package px-4 scrollable"
            >
              <div className="title d-flex">
                <p className="fw-bold me-4">Departing</p>
                <p className="fw-bold">Trip status</p>
              </div>
              <hr className="px-4" />
              <div className="status d-flex justify-content-between">
                <div className="date">
                  <p>26 Sep,2022</p>
                </div>
                <div className="booking">
                  <p>Booking Open</p>
                </div>
                <div className="booking-btn">
                  <button className="btn btn-outline-main">Book Now</button>
                </div>
              </div>
              <hr className="px-4" />
              <div className="status d-flex justify-content-between">
                <div className="date">
                  <p>26 Sep,2022</p>
                </div>
                <div className="booking">
                  <p>Booking Open</p>
                </div>
                <div className="booking-btn">
                  <button className="btn btn-outline-main">Book Now</button>
                </div>
              </div>
              <hr className="px-4" />
              <div className="status d-flex justify-content-between">
                <div className="date">
                  <p>26 Sep,2022</p>
                </div>
                <div className="booking">
                  <p>Booking Open</p>
                </div>
                <div className="booking-btn">
                  <button className="btn btn-outline-main">Book Now</button>
                </div>
              </div>
              <hr className="px-4" />
              <div className="status d-flex justify-content-between">
                <div className="date">
                  <p>26 Sep,2022</p>
                </div>
                <div className="booking">
                  <p>Booking Open</p>
                </div>
                <div className="booking-btn">
                  <button className="btn btn-outline-main">Book Now</button>
                </div>
              </div>
              <hr className="px-4" />
              <div className="status d-flex justify-content-between">
                <div className="date">
                  <p>26 Sep,2022</p>
                </div>
                <div className="booking">
                  <p>Booking Open</p>
                </div>
                <div className="booking-btn">
                  <button className="btn btn-outline-main">Book Now</button>
                </div>
              </div>
              <hr className="px-4" />
              <div className="status d-flex justify-content-between">
                <div className="date">
                  <p>26 Sep,2022</p>
                </div>
                <div className="booking">
                  <p>Booking Open</p>
                </div>
                <div className="booking-btn">
                  <button className="btn btn-outline-main">Book Now</button>
                </div>
              </div>
            </div>
            <hr className="px-4" />
            <div className="package px-4 mt-2">
              <a style={{ fontSize: '20px' }} className="text-primary" href="#">
                Customize Your Trip
              </a>
              <hr className="px-4" />
            </div>
            <div className="package px-4 rating mt-2 d-flex">
              <div className="iocns-star d-flex">
                <i class="bi text-warning me-1 bi-star-fill"></i>
                <i class="bi text-warning me-1 bi-star-fill"></i>
                <i class="bi text-warning me-1 bi-star-fill"></i>
                <i class="bi text-warning me-1 bi-star-fill"></i>
              </div>
              <div className="text">
                <p className="text-primary"> - Based on 25 Reviews</p>
              </div>
            </div>
            <hr className="px-4" />
            <div className="package text-primary px-4 album d-flex justify-content-center align-items-center ">
              <i class="bi h4 me-2 bi-images"></i>
              <a className="h6" href="#">
                Photo Tour (Gallery)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
