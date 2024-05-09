import React from 'react';
import Navbar from './Navbar';
import Axios from 'axios';

const Home = () => {

  const getSquadStats = (clubName) => {
    Axios.post("http://localhost:4000/clubStat/getClubStats", {
      clubName: clubName
    }).then(response => {
      const stats = response.data.data; 
      console.log(stats);
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <div className='home'>
      <Navbar/>
      <select name="club" id="club">
        <option value="" selected disabled hidden>Select Club</option>
        <option onClick={getSquadStats("Arsenal")} value="Arsenal">Arsenal</option>
        <option onClick={getSquadStats("Manchester City")} value="Manchester City">Manchester City</option>
      </select>
    </div>
  );
};

export default Home;
