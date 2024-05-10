import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ClubComparision = () => {
  const [selectedClub, setSelectedClub] = useState("");
  const [stats, setStats] = useState([]);

  useEffect(() => {
    if (selectedClub) {
      getSquadStats(selectedClub);
    }
  }, [selectedClub]);

  const getSquadStats = (clubName) => {
    Axios.post("http://localhost:4000/clubStat/getClubStats", {
      clubName: clubName
    }).then(response => {
      const statsData = response.data.stats.data; 
      console.log(statsData); 
      setStats(statsData); 
    }).catch(error => {
      console.error(error);
      setStats([]); 
    });
  };  

  const handleClubChange = (event) => {
    const selectedClub = event.target.value; 
    setSelectedClub(selectedClub); 
  };

  return (
    <div className='club'>
      <div className='selectStat'>
        <select name="club" id="club" onChange={handleClubChange} value={selectedClub}>
          <option value="" disabled>Select Club</option>
          <option value="Arsenal">Arsenal</option>
          <option value="Chelsea">Chelsea</option>
          <option value="Manchester City">Manchester City</option>
          <option value="Manchester United">Manchester United</option>
          <option value="Liverpool">Liverpool</option>
          <option value="Everton">Everton</option>
          <option value="Spurs">Spurs</option>
          <option value="West Ham">West Ham</option>
          <option value="Leicester City">Leicester City</option>
          <option value="Southampton">Southampton</option>
          <option value="Leeds United">Leeds United</option>
          <option value="Newcastle United">Newcastle United</option>
          <option value="Wolves">Wolves</option>
          <option value="Brighton">Brighton</option>
          <option value="Crystal Palace">Crystal Palace</option>
        </select>
      </div>

      <div className='displayStat'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Position</th>
              <th>MP</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>xG per 90</th>
            </tr>
          </thead>
          <tbody>
            {stats && stats.length > 0 ? 
              stats.map((player, index) => (
                <tr key={index}>
                  <td>{player.Player_Name}</td>
                  <td>{player.Age}</td>
                  <td>{player.Position}</td>
                  <td>{player.Matches_Played}</td>
                  <td>{player.Goals}</td>
                  <td>{player.Assists}</td>
                  <td>{player.xG_per_90}</td>
                </tr>
              ))
              :
              <tr key="loading">
                <td colSpan="7">Loading...</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClubComparision;
