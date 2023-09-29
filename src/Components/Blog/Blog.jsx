/** @format */

import React, { useEffect } from "react"
import "./blog.css"
import { BsArrowRightShort } from "react-icons/bs"
import img from "../../Assets/mmmmmmmmmmmm.webp"
import img2 from "../../Assets/free-photo-of-stadt-wahrzeichen-gebaude-brucke.jpeg"
import img3 from "../../Assets/bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.jpeg"
import img4 from "../../Assets/للللللللللللللللللل.jpeg"
import Aos from "aos"
import "aos/dist/aos.css"

function Blog() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const posts = [
    {
      id: 1,
      postImg: img,
      title: "Moses-Mountain Sinai, Let's Travel.",
      des: "Mount Sinai, also known as Jabal Musa, is a mountain on the Sinai Peninsula of Egypt. It is one of several locations claimed to be the biblical Mount Sinai, the place where, according to the Torah, Bible, and Quran, Moses received the Ten Commandments",
    },
    {
      id: 2,
      postImg: img2,
      title: "Istanbul Turkey, Let's Travel.",
      des: "Turkey, officially the Republic of Turkey, is a transcontinental country located at the juncture of Southeast Europe and West Asia. It is mainly on the Anatolian Peninsula in West Asia, with a small portion called East Thrace on the Balkan Peninsula in Southeast Europe",
    },
    {
      id: 3,
      postImg: img3,
      title: "Piazza del Duomo Italy, Let's Travel.",
      des: "The Leaning Tower of Pisa, or simply, the Tower of Pisa, is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation",
    },
    {
      id: 4,
      postImg: img4,
      title: "Brandenburg Gate Germany , Let's Travel.",
      des: "The Brandenburg Gate is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II after restoring the Orangist power by suppressing the Dutch popular unrest",
    },
  ]
  return (
    <section className='blog container section'>
      <div className='secContainer'>
        <div className='secIntro' data-aos='fade-down' data-aos-duration='200'>
          <h2 className='secTitle'>Our Best Blog?</h2>
          <p>an Insight to the Incredible Experience in the World</p>
        </div>
        <div className='mainContainer grid'>
          {posts.map(({ id, postImg, title, des }) => {
            return (
              <div
                className='singlePost grid'
                key={id}
                data-aos='zoom-in'
                data-aos-duration='200'>
                <div className='imgDiv'>
                  <img src={postImg} alt={title} />
                </div>
                <div className='postDetails'>
                  <h3>{title}</h3>
                  <p>{des} </p>
                </div>
                <a href='#' className='flex'>
                  Read More
                  <BsArrowRightShort className='icon' />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog
