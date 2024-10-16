import React from 'react';
import Logo from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const nav=<>
    <li><Link>Home</Link></li>
    <li><Link to='/about'>About Us</Link></li>
    <li><Link>Blogs</Link></li>
    <li><Link>Contact</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-white shadow-lg rounded-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {nav}
      </ul>
    </div>
    <a className="bg-black py-2 px-2 rounded-lg"><img src={Logo}alt=''/></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {nav}
    </ul>
  </div>
  <div className="navbar-end">
  </div>
</div>
        </div>
    );
};

export default NavBar;