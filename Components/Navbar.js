import React from 'react'
import { useState, useEffect } from 'react'
import Style from '../public/css/Navbar.module.css'
import Link from 'next/link'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Image from 'next/image'
function Navbar() {
  const [active, setActive] = useState(`${Style.items}`)
  const [toggleIcon, setToggleIcon] = useState(`${Style.hamburger}`)
  const [onhover, setOnhover] = useState(false)
  const hoverShow = () => {
    setOnhover(true)
  }

  const navToggle = () => {
    active === `${Style.items}`
      ? setActive(`${Style.items} ${Style.activeMenu}`)
      : setActive(`${Style.items}`)

    toggleIcon === `${Style.hamburger}`
      ? setToggleIcon(`${Style.hamburger} ${Style.toggleIcon}`)
      : setToggleIcon(`${Style.hamburger}`)
  }

  return (
    <>
      <div className={Style.container}>
        <nav className={Style.navbar}>
          <div className={Style.logoContainer}>
            <ul>
              <a href="/">
                <img
                  src="/image/logo.png"
                  alt="Golden Duck Enterprises Pvt. Ltd."
                  id="logo"
                  width="50px"
                  height="40px"
                />
              </a>
            </ul>
          </div>

          <div className={Style.right}>
            <ul className={active}>
              <li className={Style.item}>
                <Link href="/" onClick={navToggle} smooth={true}>
                  Home
                </Link>
              </li>
              <li onMouseOver={hoverShow} className={Style.item}>
                <a>Services</a>
              </li>
              <li className={Style.item}>
                <Link href="/blogs" onClick={navToggle} smooth={true}>
                  Blogs
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/Portfolio" onClick={navToggle} smooth={true}>
                  Portfolio
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/gallery" onClick={navToggle} smooth={true}>
                  Gallery
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/contact" onClick={navToggle} smooth={true}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className={Style.startProject}>
            <li className={Style.startProjectButton}>
              <Link href="/contact" onClick={navToggle} smooth={true}>
                Start Project
              </Link>
            </li>
          </div>

          <div className={toggleIcon} onClick={navToggle}>
            <div className={`${Style.hamItem} ${Style.line1}`}></div>
            <div className={`${Style.hamItem} ${Style.line2}`}></div>
            <div className={`${Style.hamItem} ${Style.line3}`}></div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
