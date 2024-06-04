import React from 'react'
import "./menuPage.css";
import Link from 'next/link';
import { MenuType } from '@/types/types';

//fetch the data from the api endpoints /categories
const getData = async() => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
}

const MunePage = async () => {

  const menu:MenuType = await getData();

  return (
    <div className='menu-container'>
      {menu.map(category => (
        <Link href={`/menu/${category.slug}`} key={category.id} style={{backgroundImage: `url(${category.img})`}} className='menu-image'>
          <div style={{color: category.color}}>
            <h1>{category.title}</h1>
            <p>{category.desc}</p>
            <button>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MunePage;
