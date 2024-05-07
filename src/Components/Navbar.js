import React from 'react';
import "../Styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
        <nav>
            <h1>
                <a className='header'>Stat</a>
                <a className='header secondHeader'>Pad</a>
            </h1>
        </nav>
    </div>
  );
}

export default Navbar;
  