import React from 'react'
import "./Navbar.css";
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link} from "react-router-dom"
import { useSelector } from 'react-redux';
const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const totalItems = cartItems.length
  return (
    <nav className='navbar-container'>
        <div className="navbar-wrapper">
            <div className="navbar-left">
                <span className="navbar-language">EN</span>
                <div className="navbar-searchcontainer">
                    <input type="text" placeholder='search' className="navbar-input" />
                    <IoSearch
                    className="icon"/>
                </div>
            </div>
            <div className="navbar-center">
                <h1 className='navbar-logo'>TrenddyZone<span>.</span></h1>
            </div>
            <div className="navbar-right">
            <Link to="/register">
            <div className="navbar-menuItem">Register</div>
            </Link>
             
            <Link to="/login">
            <div className="navbar-menuItem">Login</div>

            </Link>
          
           <Link to='/cart'>
           <div className="navbar-menuItem">
                <MdOutlineShoppingCart className='icon'/>
                {totalItems > 0 && <span className='cart-badge'>{totalItems}</span>}
            </div>
           </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
