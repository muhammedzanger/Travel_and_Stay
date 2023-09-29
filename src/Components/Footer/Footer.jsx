/** @format */

import React, { useEffect } from "react"
import "./footer.css"
import { SiYourtraveldottv } from "react-icons/si"
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs"
import Aos from "aos"
import "aos/dist/aos.css"

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='footer' data-aos='zoom-in' data-aos-duration='400'>
      <div className='secContainer container grid'>
        <div className='logoDiv'>
          <div className='footerLogo'>
            <a href='#' className='logo flex'>
              <h1 className='flex'>
                <SiYourtraveldottv className='logo icon' />
                Dot
              </h1>
            </a>
          </div>
          <div
            className='social flex'
            data-aos='flip-right'
            data-aos-duration='400'>
            <BsFacebook className='icon' />
            <BsGithub className='icon' />
            <BsLinkedin className='icon' />
          </div>
        </div>
        <div
          className='footerLinks'
          data-aos='flip-right'
          data-aos-duration='400'>
          <span className='linkTitle'>Helpful Links</span>
          <li>
            <a href='#'>Destination</a>
          </li>
          <li>
            <a href='#'>Support</a>
          </li>
          <li>
            <a href='#'>Travel & Conditions</a>
          </li>
          <li>
            <a href='#'>Privacy</a>
          </li>
        </div>
        <div
          className='footerLinks'
          data-aos='flip-right'
          data-aos-duration='400'>
          <span className='linkTitle'>Information</span>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Explore</a>
          </li>
          <li>
            <a href='#'>Travel</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
        </div>
        <div
          className='footerLinks'
          data-aos='flip-right'
          data-aos-duration='400'>
          <span className='linkTitle'>Contact Us</span>
          <span className='phone'>+2(0123)456 789</span>
          <span className='email'>example@mail.com</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
