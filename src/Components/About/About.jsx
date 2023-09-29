/** @format */

import React, { useEffect } from "react"
import "./about.css"
import img from "../../Assets/mountain.jpeg"
import img2 from "../../Assets/customer.webp"
import img3 from "../../Assets/climbng.webp"
import video from "../../Assets/videos_2256132 (2160p).mp4"
import Aos from "aos"
import "aos/dist/aos.css"

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='about container'>
      <div className='secContainer'>
        <h2 className='title' data-aos='fade-left' data-aos-duration='200'>
          Why Hikings?
        </h2>
        <div
          className='mainContent container grid'
          data-aos='flip-left'
          data-aos-duration='200'>
          <div className='singleItem'>
            <img src={img} alt='' />
            <h3>200+ Mountains</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health and will-bing
            </p>
          </div>
          <div className='singleItem'>
            <img src={img3} alt='' />
            <h3>500+ Hikinks</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health and will-bing
            </p>
          </div>
          <div className='singleItem'>
            <img src={img2} alt='' />
            <h3>1000+ Customer</h3>
            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduces stress and improves health and will-bing
            </p>
          </div>
        </div>
        <div
          className='video-cart container'
          data-aos='flip-left'
          data-aos-duration='200'>
          <div className='cart-content grid'>
            <div
              className='cart-text'
              data-aos='zoom-in'
              data-aos-duration='200'>
              <h2>Wonderful House Experience here!</h2>
              <p>
                The Adventure subranking is based on an equally weighted average
                of scores from five country
              </p>
            </div>
            <div
              className='cart-video'
              data-aos='fade-right'
              data-aos-duration='200'>
              <video
                src={video}
                autoPlay
                loop
                controls
                muted
                type='video/mp4'></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
