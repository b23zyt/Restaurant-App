"use client"
import React from 'react'
import "./countDown.css"
import Countdown from 'react-countdown'

const date = new Date("2024-06-01")

const CountDown = () => {
  return (
    <div className='count'>
     <Countdown date={date} />
    </div>
  )
}

export default CountDown
