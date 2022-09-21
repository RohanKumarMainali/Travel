import React from 'react'

function Blog() {
  return (
    <>
      <div class="col-xl-8 col-lg-10 col-md-12 text-center mx-auto mt-4">
        <div class="section-title1">
          <span>Blog & News</span>
          <h2>Get to Know Travel Experiences</h2>
          <img src="image/durpin.svg" alt="image" />
        </div>
      </div>
      <div className="container">
        <div className="row g-5 justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-10">
            <div class="blog-single1">
              <div class="image">
                <img
                  src="image/blog-grid1.png"
                  class="img-fluid"
                  alt="image"
                />
                <span class="blog-date">February 8, 2022</span>
              </div>
              <div class="content">
                <h4>
                  <a href="/blog-details">
                    The Social Art of Zaha Hadid, Architecture’s Engaging
                    Presence
                  </a>
                </h4>
                <a class="read-more-btn" href="/blog-details">
                  Continue Reading<i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-10">
            <div class="blog-single1">
              <div class="image">
                <img
                  src="image/blog-grid2.png"
                  class="img-fluid"
                  alt="image"
                />
                <span class="blog-date">February 8, 2022</span>
              </div>
              <div class="content">
                <h4>
                  <a href="/blog-details">
                    The Social Art of Zaha Hadid, Architecture’s Engaging
                    Presence
                  </a>
                </h4>
                <a class="read-more-btn" href="/blog-details">
                  Continue Reading<i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          
        

          <div className="col-lg-4 col-md-6 col-sm-10">
            <div class="blog-single1">
              <div class="image">
                <img
                  src="image/blog-grid3.png"
                  class="img-fluid"
                  alt="image"
                />
                <span class="blog-date">February 8, 2022</span>
              </div>
              <div class="content">
                <h4>
                  <a href="/blog-details">
                    The Social Art of Zaha Hadid, Architecture’s Engaging
                    Presence
                  </a>
                </h4>
                <a class="read-more-btn" href="/blog-details">
                  Continue Reading<i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default Blog
