import React, { useState } from 'react';
import ClubComparison from './ClubComparison';
import PlayerComparison from './PlayerComparison';
import Navbar from './Navbar';
import "../Styles/Home.scss";

const Home = () => {
  const [showClubComparison, setShowClubComparison] = useState(true);
  const [showPlayerComparison, setShowPlayerComparison] = useState(false);

  const handleClubComparisonClick = () => {
    setShowClubComparison(true);
    setShowPlayerComparison(false);
  };

  const handlePlayerComparisonClick = () => {
    setShowPlayerComparison(true);
    setShowClubComparison(false);
  };

  return (
    <div className='home'>
      <Navbar
        onClubComparisonClick={handleClubComparisonClick}
        onPlayerComparisonClick={handlePlayerComparisonClick}
      />
      {showClubComparison && <ClubComparison />}
      {showPlayerComparison && <PlayerComparison />}
    </div>
  );
}

export default Home;
