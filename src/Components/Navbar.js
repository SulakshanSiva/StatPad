import React from 'react';
import "../Styles/Navbar.scss";
import { Link } from 'react-router-dom';

const Navbar = ({ onPlayerComparisonClick, onClubComparisonClick }) => {
  return (
    <div className="navbar">
      <nav>
        
        <div className='logo'>
          <h1>
            <a className='header'>
              <Link to="/">Stat</Link>
            </a>
            <a className='header secondHeader'>
              <Link to="/">Pad</Link>
            </a>
          </h1>
        </div>
        
        <div className='navLink'>
          <ul>
            <li>
              <a  onClick={onClubComparisonClick}>Club Stats</a>
            </li>
            <li>
              <a onClick={onPlayerComparisonClick}>Player Stats</a>
            </li>
          </ul>
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar;
