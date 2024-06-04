import React from 'react'
import "./featured.css"
import Image from 'next/image'
import { ProductType } from '@/types/types';

//fetch the data from api endpoints "products" in which isFeatured = true
const getData = async() => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
}

const Featured = async() => {
  const featuredProducts: ProductType[] = await getData();
  return (
    <div className='featured-container'>

      {/* WRAPPER */}
      <div className='featured-wrapper'>

        {/* SINGLE ITEMS */}
        {
          featuredProducts.map(item => (
          <div key={item.id} className='featured-single-item'>

          {/* IMAGE CONTAINER */}
          {item.img && <div className='featured-image-container'>
            <Image src={item.img} alt='' width={300} height={300}/>
          </div>}

          {/* TEXT CONTAINER */}
          <div className='feature-text-container'>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <span>${item.price}</span>
            <button>Add to Cart</button>
          </div>

        </div>
        ))}

      </div>
    </div>
  )
}

export default Featured
