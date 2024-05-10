import React from 'react'
import ClubComparision from './ClubComparision'
import PlayerComparision from './PlayerComparision'
import Navbar from './Navbar'
import "../Styles/Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      {/* <ClubComparision/> */}
      <PlayerComparision/>
    </div>
  )
}

export default Home