import Link from 'next/link'
import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer-container'>
      <Link href="/" className='footer-text'>我的饭店</Link>
      <p>© 2024 Benjamin Zeng</p>
    </div>
  )
}

export default Footer
