/** @format */

import React, { useEffect } from "react"
import "./popular.css"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { BsDot } from "react-icons/bs"
// import images
import image from "../../Assets/mansions_main_fin.jpg"
import img2 from "../../Assets/pyramids-scaled.webp"
import img3 from "../../Assets/paris.jpg"
import img4 from "../../Assets/turkey.jpg"
import img5 from "../../Assets/sydeny.webp"
import Aos from "aos"
import "aos/dist/aos.css"

function Popular() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const data = [
    {
      id: 1,
      imgSrc: img2,
      destTitle: "Giza",
      location: "Egypt",
      grade: "CULTURAL RELAX",
    },
    {
      id: 2,
      imgSrc: img3,
      destTitle: "Paris",
      location: "France",
      grade: "CULTURAL RELAX",
    },
    {
      id: 3,
      imgSrc: img4,
      destTitle: "Istanbul",
      location: "Turkey",
      grade: "CULTURAL RELAX",
    },
    {
      id: 4,
      imgSrc: img5,
      destTitle: "Sydeny",
      location: "Austuralia",
      grade: "CULTURAL RELAX",
    },
  ]
  return (
    <section className='popular section container'>
      <div className='secContainer'>
        <div className='secHeader flex'>
          <div
            className='textDiv'
            data-aos='fade-right'
            data-aos-duration='600'>
            <h2 className='secTitle'>Popular Destination</h2>
            <p>
              From Historical Cities to Natural Specteculars, Come See The Best
              of The World!
            </p>
          </div>
          <div
            className='iconsDiv flex'
            data-aos='fade-up'
            data-aos-duration='600'>
            <AiOutlineArrowLeft className='icon leftIcon' />
            <AiOutlineArrowRight className='icon' />
          </div>
        </div>
        <div className='mainContent grid'>
          {data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div
                className='singleDestination'
                key={id}
                data-aos='fade-up'
                data-aos-duration='200'>
                <div className='destImage'>
                  <img src={imgSrc} alt='' />
                  <div className='overlayInfo'>
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <AiOutlineArrowRight className='icon' />
                  </div>
                </div>
                <div className='destFooter'>
                  <div className='number'>0{id}</div>
                  <div className='destText flex'>
                    <h6>{location}</h6>
                    <span className='flex'>
                      <span className='dot'>
                        <BsDot className='icon' />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Popular
