import React from 'react'
import ClubComparision from './ClubComparision'
import Navbar from './Navbar'
import "../Styles/Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <ClubComparision/>
    </div>
  )
}

export default Home