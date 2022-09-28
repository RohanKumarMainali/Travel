import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

function Blog() {
  const [blogs, setBlogs] = useState([])

  const getBlog = async () => {
    const response = await axios.get('http://127.0.0.1:8000/blog/')
    console.log(response.data)
    setBlogs(response.data)
  }

  useEffect(() => {
    getBlog()
  }, [])

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
          {blogs.map((blog) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div class="blog-single1">
                    <div
                      class="image"
                      style={{
                        backgroundImage:
                          `url(http://127.0.0.1:8000${blog.image})`,
                        height: '30vh',
                        backgroundSize: 'cover',
                        backgroundPosition: ' center center',
                      }}
                    >
                    </div>
                    <div class="content">
                    <span class="blog-date">
                        {blog.posted_on.slice(0, 10)}
                      </span>
                      <h4>
                        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                      </h4>
                      <a class="read-more-btn" href="/blog-details">
                        Continue Reading<i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Blog
