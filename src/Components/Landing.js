import React from 'react'
import "../Styles/Landing.scss"

const Landing = () => {
  return (
    <div className='landing'>
      <div className="white-square">

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
       
        <button className='btn'>Head Here!</button>
      </div>
    </div>
  )
}

export default Landing