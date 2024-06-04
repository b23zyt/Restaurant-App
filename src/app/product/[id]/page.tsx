import React from 'react'
import "./singleProduct.css"
import Image from 'next/image'
import { singleProduct } from '@/data'
import Price from '@/components/price/Price'

const SingleProductPage = () => {
  return (
    <div className='single-container'>
      {/* IMAGE CONTAINER */}
      {singleProduct.img && <div className='single-image-container'>
        <Image src={singleProduct.img} alt='' height={320} width={320}/>
      </div>}

      {/* IMAGE CONTAINER */}
      <div className='single-text-container'>
        <h1>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
      </div>
    </div>
  )
}

export default SingleProductPage
