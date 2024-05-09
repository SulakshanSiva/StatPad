import React from 'react';
import "../Styles/Navbar.scss";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <nav>
            <h1>
                <a className='header'>
                  <Link to="/">Stat</Link>
                </a>
                <a className='header secondHeader'>
                  <Link to="/">Pad</Link>
                </a>
            </h1>
        </nav>
    </div>
  );
}

export default Navbar;