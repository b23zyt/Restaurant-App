import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./cartIcon.css";

const CartIcon = () => {
  return (
    <Link href="/cart" className="icon-container">
      <div className="cart-image">
        <Image src="/cart.png" alt="cart logo" width={20} height={20} />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;