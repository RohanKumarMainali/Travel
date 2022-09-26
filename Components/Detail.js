import React from 'react'

const Detail = (props) => {
  const parse = require('html-react-parser')
  var included = props?.singlePackage?.package_included.split(',');
  var excluded = props?.singlePackage?.package_excluded.split(',');

  console.log(included)
  console.log(excluded)

  return (
    <div className="container  py-5">
      <div className="row">
        <div className="col-md-8  ">
          <div className="col-md-12 border mb-4 p-4">
            <h3 className="fw-bold">Overview</h3>
            <hr className="px-4" />
            <p>{parse(`${props?.singlePackage?.description}`)}</p>
          </div>
          <div className="border mb-4 p-4">
            <h3 className="fw-bolder">Your Itinerary</h3>
            <hr className="px-4" />

            {props?.packageDays?.map((element) => {
              return (
                <>
                  <div className="detail">
                    <h5 className="text-secondary fw-bold">
                      {element.title}
                    </h5>
                    <p>
                     {element.description}
                    </p>
                  </div>
                </>
              )
            })}
          </div>
          <div className="border p-4">
            <h3 className="fw-bold">Additional Info</h3>
            <hr className="px-4" />
            <div className="detail">
              <h2 className="fw-bolder">Everest Base Camp Difficulty </h2>
              <p>
                Travel experts of Nepal have graded the difficulty of the
                Everest Base Camp trek as “moderate”. This means you will need
                very good fitness for walking 6 to 7 hours each day for about a
                week. However, there’s no need for any mountain climbing skills
                and gears to complete this trek. Basically, any person with good
                physical and mental fitness can complete this trek with a few
                months of preparation. Two to three months before the trek, you
                need to engage in some cardio exercises such as running,
                jogging, swimming, and cycling. It really helps to boost your
                stamina before you head for the trek. It’s easier than the
                Everest Three Pass Trek. The major Everest base camp trek
                difficulty is distance and altitude. Everest Base Camp distance
                is about 150 km and you will be covering this distance for 8
                days. This means you will be walking 15 to 20 km each day. This
                makes 6 to 7 hours of the daily walk which surely demands good
                physical health. Along with distance, the altitude of Everest
                base camp 5300 M, and that of Kala Pathar is also a big
                challenge during the trek. Once you cross Namche Bazaar, you
                start to feel the pressure of low oxygen level which makes your
                climb harder. Covering 500 to 1000m each day and including a
                rest day in Everest Base Camp Trek Itinerary helps you a lot.
                However, this doesn’t mean you need oxygen for the Everest Base
                Camp trek.
              </p>
            </div>
          </div>
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
                        {included?.map(data =>{
                          <ul>
                          <li>
                            <div class="bi bi-check-circle-fill mr-3"></div>
                            {/* {data} */}
                          </li>
                        </ul>
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

                    <div class="excludes">
                      <ul>
                        <li>
                          <div class="bi bi-x-circle-fill"></div>Meals in
                          Kathmandu before and after trekking
                        </li>
                  
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FAQ */}
          <div className="border mt-5 mb-4 p-4">
            <h3 className="fw-bolder">FAQ</h3>
            <hr className="px-4" />
            <div className="detail">
              <h5 className=" fw-bold">
                Is there internet on the Everest Base Camp trek?
              </h5>
              <p>
                Trek adventure begins with your arrival in Kathmandu City, the
                capital of Nepal. Upon your arrival, we’ll meet you at the
                Arrivals gate at Tribhuvan International Airport. A
                representative from My Everest Trip staff will meet you at the
                airport and help you with your luggage. Enjoy a brief tour of
                the bustling Kathmandu.
              </p>
            </div>
            <div className="detail">
              <h5 className="fw-bold">
                Is Everest Base Camp Trek Solo trip possible?
              </h5>
              <p>
                Trek adventure begins with your arrival in Kathmandu City, the
                capital of Nepal. Upon your arrival, we’ll meet you at the
                Arrivals gate at Tribhuvan International Airport. A
                representative from My Everest Trip staff will meet you at the
                airport and help you with your luggage. Enjoy a brief tour of
                the bustling Kathmandu city as you make your way to the hotel.
                You will check .
              </p>
            </div>
            <div className="detail">
              <h5 className="fw-bold">
                Do I need a Guide for the Everest Base Camp trek?
              </h5>
              <p>
                Legally you don’t. There are some restricted trekking regions in
                Nepal where hiring a guide is compulsory. However, Everest is
                not one of them. So you don’t compulsorily need a guide for
                Everest. However, this is a remote unknown land where you might
                face many challenges. The locals and hotel owners don’t
                understand English and you cannot find the hotels on the
                internet. Also, you are unknown to the Everest Base Camp trek
                amp between the forest. The unique culture of the mountains
                might also be hard to understand. That is why hiring a guide is
                always the best solution.
              </p>
            </div>
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
