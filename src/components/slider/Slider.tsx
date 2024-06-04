"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import "./slider.css"


const data = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in NY",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: "/slide3.jpg",
    },
  ];

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect ( () => {
    //     const interval = setInterval(
    //         () => setCurrentSlide(prev => (prev === data.length -1) ? 0 : prev+1), 2000); //change the slide number for every 2 seconds
    //     return ()=> clearInterval(interval) //clear the interval to prevent memory leak
    // }, [])

  return (
    <div className='slider-container'>
    {/* TEXT CONTAINER */}
      <div className='slider-text-container'>
            <h1>
                {data[currentSlide].title}
            </h1>
            <button>
                Order Now!
            </button>
      </div>

    {/* IAMGE CONTAINER */}
      <div className='slider-image-container'>
        <Image src={data[currentSlide].image} alt="" width={600} height={400} className='slider-image'/>
      </div>
    </div>
  )
}

export default Slider
