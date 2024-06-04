import React from 'react'
import "./cartPage.css"
import Image from 'next/image';

const CartPage = () => {
  return (
    <div className='cart-page-container'>

      {/* PRODUCT CONTAINER */}
      <div className='cart-product-container'>
        <div className='cart-single-product-container'>
          <Image src="/temporary/p1.png" alt='' height={100} width={100} className='cart-images'/>
          <div className='cart-single-name-container'>
            <h1>sicilian</h1>
            <span>large</span>
          </div>
          <h2 className='cart-price-container total-price'>$79.99</h2>
          <span className='cart-delete'>X</span>
        </div>

        <div className='cart-single-product-container'>
          <Image src="/temporary/p1.png" alt='' height={100} width={100} className='cart-images'/>
          <div className='cart-single-name-container'>
            <h1>sicilian</h1>
            <span>large</span>
          </div>
          <h2 className='cart-price-container total-price'>$79.99</h2>
          <span className='cart-delete'>X</span>
        </div>
        
        <div className='cart-single-product-container'>
          <Image src="/temporary/p1.png" alt='' height={100} width={100} className='cart-images'/>
          <div className='cart-single-name-container'>
            <h1>sicilian</h1>
            <span>large</span>
          </div>
          <h2 className='cart-price-container total-price'>$79.99</h2>
          <span className='cart-delete'>X</span>
        </div>

        <div className='cart-single-product-container'>
          <Image src="/temporary/p1.png" alt='' height={100} width={100} className='cart-images'/>
          <div className='cart-single-name-container'>
            <h1>sicilian</h1>
            <span>large</span>
          </div>
          <h2 className='cart-price-container total-price'>$79.99</h2>
          <span className='cart-delete'>X</span>
        </div>

        

        <div className='cart-single-product-container'>
          <Image src="/temporary/p1.png" alt='' height={100} width={100} className='cart-images'/>
          <div className='cart-single-name-container'>
            <h1>sicilian</h1>
            <span>large</span>
          </div>
          <h2 className='cart-price-container total-price'>$79.99</h2>
          <span className='cart-delete'>X</span>
        </div>
      </div>
      

      {/* PAYMENT CONTAINER */}
      <div className='cart-payment-container'>
        <div className='cart-price-container'>
          <span>Subtotal (3 items)</span>
          <span className='cart-payment-price'>$88.88</span>
        </div>
        <div className='cart-price-container'>
          <span>Service Cost</span>
          <span className='cart-payment-price'>$0.00</span>
        </div>
        <div className='cart-price-container'>
          <span>Delivery Cost</span>
          <span className='delivery'>FREE</span>
        </div>

        <hr />
        <div className='cart-price-container total-price'>
          <span>TOTAL</span>
          <span className='cart-payment-price'> $88.88</span>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage;
