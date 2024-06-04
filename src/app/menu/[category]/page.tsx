import React from 'react'
import "./category.css"
import Link from 'next/link';
import Image from 'next/image';
import { ProductType } from '@/types/types';

//fetch the data from api endpoints "products/category"
const getData = async(category: string) => {
  const res = await fetch(`http://localhost:3000/api/products?cat=${category}`, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
}

type Props = {
  params: {category: string},
}

const ProductPage = async ({params}: Props) => {

  const products:ProductType[] = await getData(params.category);

  return (
    <div className='category-container'>
      {products.map(item => (
        <Link href={`/product/${item.id}`} key={item.id} className='category-map'>

        {/* IMAGE CONTAINER */}
        <div className='category-image-container'>
          {item.img && <Image src={item.img} alt='' width={300} height={300}/>}
        </div>

        {/* TEXT CONTAINER */}
        <div className='category-text-container'>
          <h1>{item.title}</h1>
          <h2>${item.price}</h2>
          <button>Add to Cart</button>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default ProductPage;
