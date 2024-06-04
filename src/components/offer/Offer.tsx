import React from 'react'
import "./offer.css";
import Image from 'next/image';
import CountDown from '../countDown/CountDown';

const Offer = () => {
  return (
    <div className='offer-container'>

      {/* TEXT CONTAINER */}
      <div className='offer-text-container'>
        <h1>Delicious Burger & French Fry</h1>
        <p>Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button>Order Now!</button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className='offer-image-container'>
      <Image src="/offerProduct.png" alt='' width={500} height={500} className='offer-image'/>
      </div>
    </div>
  )
}

export default Offer
