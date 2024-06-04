"use client";

import React, { useEffect, useState } from 'react'
import "./price.css"

type props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[];
}


const Price = ({price, id, options}: props) => {

    const [totol, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect( () => {
        setTotal(quantity * (options? price + options[selected].additionalPrice : price)
    );}, [quantity, selected, options, price]);

  return (
    <div className='price-container'>
        <h2>${totol.toFixed(2)}</h2>

        {/* OPTIONS CONTAINER */}
        <div className='price-option-container'>
            {options?.map((option,index) => (
                <button key={option.title} style={{
                    background: selected === index ? "rgb(178, 223, 106)" : "white",
                    color: selected === index ? "black" : "red",
                    
                }}
                onClick={() => {
                    setSelected(index)
                }}>
                    {option.title}
                </button>
            ))}
        </div>

        {/* QUANTITY AND ADD BUTTON CONTAINER */}
        <div className='price-remain'>
            <div className='price-quantity'>

                {/* Quantity */}
                <span>Quantity</span>
                <div>
                    <button onClick={() => setQuantity((pre) => (pre > 1) ? pre - 1 : 1) }>{'<'}</button>
                    <span> {quantity} </span>
                    <button onClick={() => setQuantity((pre) => (pre < 9)? pre + 1:  9)}>{'>'}</button>
                </div>
            </div>
            {/*Cart Button */}
            <button className='cart-button'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Price
