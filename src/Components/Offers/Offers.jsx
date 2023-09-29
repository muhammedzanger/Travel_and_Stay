/** @format */

import React, { useEffect } from "react"
import "./offers.css"
import {
  MdKingBed,
  MdBathtub,
  MdAirportShuttle,
  MdLocationOn,
} from "react-icons/md"
import { FaWifi } from "react-icons/fa"
import { BsArrowRightShort } from "react-icons/bs"
import img5 from "../../Assets/pexels-photo-2104151.jpeg"
import img6 from "../../Assets/pexels-photo-2360673.jpeg"
import img7 from "../../Assets/mansions_main_fin.jpg"
import Aos from "aos"
import "aos/dist/aos.css"

function Offers() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const offers = [
    {
      id: 1,
      imgSrc: img5,
      destDetail: "Sharm Elsheikh",
      location: "Egypt",
      price: "$100.000",
    },
    {
      id: 2,
      imgSrc: img6,
      destDetail: "Hurghada",
      location: "Egypt",
      price: "$70.000",
    },
    {
      id: 3,
      imgSrc: img7,
      destDetail: "Marsa Allam",
      location: "Egypt",
      price: "$150.000",
    },
  ]
  return (
    <section className='offer container section'>
      <div className='secContainer'>
        <div className='secIntro' data-aos='fade-left' data-aos-duration='200'>
          <h2 className='secTitle'>Special Offers</h2>
          <p>
            We have a wide range of offers for you. We are here to help you find
            the best deals on your favorite products and services in all Over
            The World
          </p>
        </div>
        <div className='mainContent grid'>
          {offers.map(({ id, imgSrc, destDetail, location, price }) => {
            return (
              <div
                className='singleOffer'
                key={id}
                data-aos='fade-down'
                data-aos-duration='200'>
                <div className='detImage'>
                  <img src={imgSrc} alt={destDetail} />
                  <span className='discount'>30% Offers</span>
                </div>
                <div className='offerBody'>
                  <div className='price flex'>
                    <h4>{price}</h4>
                    <span className='status'>For Rent</span>
                  </div>
                  <div className='flex amenities'>
                    <div className='singleAmenity flex'>
                      <MdKingBed className='icon' />
                      <small>2 Beds</small>
                    </div>
                    <div className='singleAmenity flex'>
                      <MdBathtub className='icon' />
                      <small>2 Baths</small>
                    </div>
                    <div className='singleAmenity flex'>
                      <FaWifi className='icon' />
                      <small>Wi- Fi</small>
                    </div>
                    <div className='singleAmenity flex'>
                      <MdAirportShuttle className='icon' />
                      <small>Shuttle</small>
                    </div>
                  </div>
                  <div className='location'>
                    <MdLocationOn className='icon' />
                    <small>500 Cairo #310, {location}</small>
                  </div>
                  <button className='btn flex'>
                    View Details <BsArrowRightShort className='icon' />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Offers
