/* eslint-disable no-use-before-define */

import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import axios from "axios";
import Instagram from "../../../Components/Instagram";
import Footer from "../../../Components/Footer";

export default function Blog() {
  const router = useRouter();
  const parse = require("html-react-parser");
  let slug = router.query.name;
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    const response = await axios.get("http://127.0.0.1:8000/blog/");
    setBlogs(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    const options = { passive: true }; // options must match add/remove event
    const scroll = (event) => {
      const { pageYOffset, scrollY } = window;
      console.log("yOffset", pageYOffset, "scrollY", scrollY);
    };
    document.addEventListener("scroll", scroll, options);
    // remove event on unmount to prevent a memory leak
    () => document.removeEventListener("scroll", scroll, options);
  }, []);

  return (
    <>
      <Head>
        <title>Travel Nepal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Script
        id="my_script"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        async
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></Script>
      <Script
        id="my_script"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        defer
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></Script>
      <Navbar></Navbar>
      <div class="inner-banner-section">
        <img
          src="/image/inner-banner-vctr.png"
          class="inner-banner-vector"
          alt="image"
        />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="breadcrumb-area">
                <span>Travel / Life Style</span>
                <h2>What To Know Before You Travel Plan A Trip.</h2>
                <div class="review-area">
                  <ul class="breadcrumb-meta-list">
                    <li> May 6, 2022</li>
                    <li>Victor Thornton</li>
                    <li> Comments: 02</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {blogs.map((blog) => {
        if (blog.slug === slug) {
          return (
            <div key={blog.id} className="container mt-5">
              <div className="row">
                <div className="col-lg-8 pe-lg-3">
                  <div className="blog">
                    <div class="blog-details-single">
                      <img
                        src={`http://localhost:8000${blog.image}`}
                        alt="image"
                      />
                    </div>
                    <div className=" blog-description">
                      <p>{parse(`${blog?.description}`)}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div class="blog-sidebar ps-lg-4">
                    <div class="blog-widget">
                      <div class="sidebar-search">
                        <form>
                          <div class="form-inner">
                            <input type="text" placeholder="Search" />
                            <button type="submit">
                              <i class="bi bi-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="blog-widget">
                      <h4 class="blog-widget-title">Trending Stories</h4>
                      <div class="trending-post">
                        <ul class="trending-post-list">
                          <li>
                            <div class="trending-post-single">
                              <div
                                class="package-image"
                                style={{
                                  backgroundImage: `url(/image/blog-grid1.png)`,
                                  height: "12vh",
                                  width: "100%",
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }}
                              ></div>
                              <div class="post-content">
                                <h6>
                                  <a href="/blog-details">
                                    The Most Underrated Europea Cities,
                                    According..
                                  </a>
                                </h6>
                                <span class="post-date">September 8, 2022</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="trending-post-single">
                              <div
                                class="package-image"
                                style={{
                                  backgroundImage: `url(/image/blog-grid3.png)`,
                                  height: "12vh",
                                  width: "100%",
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }}
                              ></div>
                              <div class="post-content">
                                <h6>
                                  <a href="/blog-details">
                                    The 25 Most Beautiful Beaches in Europe,
                                    From Turkey.
                                  </a>
                                </h6>
                                <span class="post-date">January 20, 2022</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="trending-post-single">
                              <div
                                class="package-image"
                                style={{
                                  backgroundImage: `url(/image/blog-grid3.png)`,
                                  height: "12vh",
                                  width: "100%",
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }}
                              ></div>
                              <div class="post-content">
                                <h6>
                                  <a href="/blog-details">
                                    A Global Food of the World’s Best
                                    Restaurants.
                                  </a>
                                </h6>
                                <span class="post-date">February 20, 2022</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="trending-post-single">
                              <div
                                class="package-image"
                                style={{
                                  backgroundImage: `url(/image/blog-grid2.png)`,
                                  height: "12vh",
                                  width: "100%",
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }}
                              ></div>
                              <div class="post-content">
                                <h6>
                                  <a href="/blog-details">
                                    Hawaii Travel Restrictions Are Lifting to
                                    Know..
                                  </a>
                                </h6>
                                <span class="post-date">October 08, 2022</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="blog-widget">
                      <div class="sidebar-social-area">
                        <h4 class="blog-widget-title">Follow us Astrip</h4>
                        <ul class="sidebar-social-list">
                          <li>
                            <a href="https://www.facebook.com/">
                              <i class="bi bi-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com/">
                              <i class="bi bi-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i class="bi bi-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.pinterest.com/">
                              <i class="bi bi-pinterest"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}

      <Instagram></Instagram>
      <Footer></Footer>
    </>
  );
}
