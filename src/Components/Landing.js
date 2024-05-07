import React from 'react'
import "../Styles/Landing.scss"
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <div className='landing'>
      <div className="white-background">

        <div className='header'>
          <h1>Stat</h1>
          <h1 className='secondHeader'>Pad</h1>
        </div>
       
        <div className='slogan'>
          <p>Where </p>
          <p className='keyWord'>Entertainment </p>
          <p>Meets </p>
          <p className='keyWord'>Statistics</p>
        </div>
       
        <Link to="/home" className='btn'>Head Here!</Link>
      </div>

      <div className='image'>

      </div>
    </div>
  )
}

export default Landing