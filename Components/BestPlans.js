import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

function BestPlans() {
  const [packages, setPackages] = useState([])

  const getPackage = async () => {
    const response = await axios.get('http://127.0.0.1:8000/')
    console.log(response.data)
    setPackages(response.data)
  }

  var included = ''
  var includedArray

  useEffect(() => {
    getPackage()
  }, [])

  return (
    <>
      <div class="col-xl-8 col-lg-10 col-md-12 text-center mx-auto mt-4">
        <div class="section-title1">
          <span>Choose Your Tour</span>
          <h2>Get The Best Plans For Your’s</h2>
          <img src="image/durpin.svg" alt="image" />
        </div>
      </div>

      <div className="container">
        <div className="container px-5">
          <div className="row justify-content-center g-4">
            {packages.map((singlePackage) => {
              included = singlePackage.package_included
              includedArray = included.split(',').slice(0, 3)

              return (
                <>
                  <div className={`col-md-4 col-sm-8 best-plan`}>
                    <div className="best-plan-single1">
                      <div
                        className="image"
                        style={{
                          backgroundImage: `url(http://127.0.0.1:8000/${singlePackage.image})`,
                          height: '30vh',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      ></div>

                      <div class="content">
                        <p>{`From $ ${singlePackage.price}`}</p>
                        <h4>
                          <a href="/tour-package-details">
                            {singlePackage.name}
                          </a>
                        </h4>
                        <div class="best-plan-meta">
                          <span class="duration">
                            <i class="bi bi-clock"></i>
                            {`${singlePackage.days} days ${
                              singlePackage.days - 1
                            } night`}
                          </span>
                          <span class="rating">
                            <i class="bi bi-star-fill"></i>4.8 (150)
                          </span>
                        </div>
                        <div class="list-area">
                          <h5>Free Package Facility:</h5>
                          <ul class="plan-list1">
                            {includedArray.map((element) => {
                              return <li>{element}</li>
                            })}
                          </ul>
                        </div>

                        <div className="discoverButtonReverse">
                          <Link href={`/package/${singlePackage.name}`}>
                            <label>Explore More</label>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>

        <div className="row"></div>
      </div>
    </>
  )
}

export default BestPlans
