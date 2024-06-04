import Link from 'next/link'
import Menu from '../menu/Menu'
import "./navbar.css";
import CartIcon from '../cartIcon/CartIcon';
import Image from 'next/image';
import UserLinks from '../UserLinks';

const Navbar = () => {

  const user = false;

  return (
    <div className='navbar-container'>
      {/* LEFT links  */}
      <div className='big'>
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* LOGO */}
      <div className='logo'>
        <Link href="/"> 
          我的饭店
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className='small'> 
        <Menu />
      </div>

      {/* right links  */}
      
      <div className='big'>
        <div className='phone-logo'>
          <Image src="/phone.png" alt="phone logo" width={20} height={20} />
          <span>123 456 789</span>
        </div>
        
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  )
}

export default Navbar
