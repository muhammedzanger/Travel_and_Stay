/** @format */

import React, { useEffect } from "react"
import "./home.css"
import Aos from "aos"
import "aos/dist/aos.css"
function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className='home'>
      <div className='secContainer container'>
        <div className='homeText'>
          <h1 data-aos='fade-up' className='title'>
            Plan Your Trip With Travel Dot
          </h1>
          <p data-aos='fade-up' data-aos-duration='600' className='subtitle'>
            Travel To Your Favourite City with Respectful of the Enviroment!
          </p>
          <button data-aos='fade-up' data-aos-duration='800' className='btn'>
            <a href='#'>Explore Now</a>
          </button>
        </div>
        <div className='homeCart grid'>
          <div
            data-aos='fade-left'
            data-aos-duration='800'
            className='locationDiv'>
            <label htmlFor='location'>Location</label>
            <input type='text' placeholder='Dream Destination' />
          </div>
          <div data-aos='fade-left' data-aos-duration='800' className='distDiv'>
            <label htmlFor='distance'>Location</label>
            <input type='text' placeholder='10/Meters' />
          </div>
          <div
            data-aos='fade-left'
            data-aos-duration='800'
            className='priceDiv'>
            <label htmlFor='price'>Location</label>
            <input type='text' placeholder='$250-$500' />
          </div>
          <button
            data-aos='fade-right'
            data-aos-duration='1000'
            className='btn'>
            Search
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
