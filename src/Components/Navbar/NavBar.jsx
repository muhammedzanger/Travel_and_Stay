/** @format */

import React, { useEffect, useState } from "react"
import "./navbar.css"
import { SiYourtraveldottv } from "react-icons/si"
import { AiFillCloseCircle } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"
import Aos from "aos"
import "aos/dist/aos.css"

function NavBar() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [active, setActive] = useState("navBar")
  const showNav = () => {
    setActive("navBar activeNavbar")
  }
  const closeNav = () => {
    setActive("navBar")
  }

  const [transparent, setTransparent] = useState("header")
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader")
    } else {
      setTransparent("header")
    }
  }
  window.addEventListener("scroll", addBg)
  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className='logoDiv' data-aos='flip-left' data-aos-duration='200'>
          <a href='#' className='logo'>
            <h1 className='flex'>
              <SiYourtraveldottv className='icon' />
              Dot.
            </h1>
          </a>
        </div>

        <div className={active} data-aos='fade-down' data-aos-duration='400'>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='#' className='navLink'>
                Home
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                Products
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                Resources
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                Contact
              </a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>
                Blog
              </a>
            </li>
            <div
              className='headerBtns flex'
              data-aos='fade-up'
              data-aos-duration='200'>
              <button className='loginBtn btn'>
                <a href='#'>Login</a>
              </button>
              <button className='btn'>
                <a href='#'>Sign up</a>
              </button>
            </div>
          </ul>
          <div
            onClick={closeNav}
            className='closeNavbar'
            data-aos='fade-up'
            data-aos-duration='200'>
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div
          onClick={showNav}
          className='toggleNavbar'
          data-aos='fade-down'
          data-aos-duration='200'>
          <TbGridDots className='icon' />
        </div>
      </div>
    </section>
  )
}

export default NavBar
