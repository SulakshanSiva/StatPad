import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "../Styles/PlayerComp.scss";

const PlayerComparison = () => {
    const [playerList, setPlayerList] = useState([]);
    const [searchTerm1, setSearchTerm1] = useState('');
    const [searchTerm2, setSearchTerm2] = useState('');
    const [filteredPlayers1, setFilteredPlayers1] = useState([]);
    const [filteredPlayers2, setFilteredPlayers2] = useState([]);
    const [playerStat1, setPlayerStat1] = useState([]);
    const [playerStat2, setPlayerStat2] = useState([]);
    const [selectedPlayer1, setSelectedPlayer1] = useState(null);
    const [selectedPlayer2, setSelectedPlayer2] = useState(null);

    const getAllPlayers = () => {
        Axios.post("http://localhost:4000/playerStat/getPlayerList", {})
            .then(response => {
                setPlayerList(response.data.data.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const getPlayerStats = (playerName, setPlayerStat) => {
        Axios.post("http://localhost:4000/playerStat/getPlayerStats", {
            playerName: playerName
        }).then(response => {
            setPlayerStat(response.data.data.data);
        })
        .catch(error => {
            console.error(error);
        });
    }

    useEffect(() => {
        getAllPlayers();
    }, []);

    useEffect(() => {
        const filtered1 = playerList.filter(player =>
            player.Player_Name.toLowerCase().includes(searchTerm1.toLowerCase())
        );
        setFilteredPlayers1(filtered1);
    }, [searchTerm1, playerList]);

    useEffect(() => {
        const filtered2 = playerList.filter(player =>
            player.Player_Name.toLowerCase().includes(searchTerm2.toLowerCase())
        );
        setFilteredPlayers2(filtered2);
    }, [searchTerm2, playerList]);

    const handleInputChange1 = (event) => {
        setSearchTerm1(event.target.value);
        setSelectedPlayer1(null); 
    };

    const handleInputChange2 = (event) => {
        setSearchTerm2(event.target.value);
        setSelectedPlayer2(null); 
    };

    const handlePlayerSelect1 = (name) => {
        setSearchTerm1(name);
        getPlayerStats(name, setPlayerStat1); 
        setSelectedPlayer1(name); 
    };

    const handlePlayerSelect2 = (name) => {
        setSearchTerm2(name);
        getPlayerStats(name, setPlayerStat2);
        setSelectedPlayer2(name); 
    };

    return (
        <div className='player'>
            <h1>Player Comparison</h1>

            <div className='description'>
                <p>The following is a table that contains the statistics for Premier League Clubs in the 2022/23 Season.</p>
                <p>Select a club from the dropdown menu above to see their statistics.</p>
                <p>Scroll down the table to view all the players!</p>
            </div>

            <div className="comparison">
                <div className="player-1">
                    <input
                        type="text"
                        placeholder="Search for player 1..."
                        value={searchTerm1}
                        onChange={handleInputChange1}
                    />
                    {!selectedPlayer1 && searchTerm1 && (
                        <ul>
                            {filteredPlayers1.map((player, index) => (
                                <li key={index} onClick={() => handlePlayerSelect1(player.Player_Name)}>
                                    {player.Player_Name}
                                </li>
                            ))}
                        </ul>
                    )}

                    {selectedPlayer1 && playerStat1.length > 0 && (
                        <div className="player-stats">
                            <h2>{playerStat1[0].Player_Name} Stats</h2>
                            <p>Age: {playerStat1[0].Age}</p>
                            <p>Club: {playerStat1[0].Club}</p>
                            <p>Goals: {playerStat1[0].Goals}</p>
                            <p>Assists: {playerStat1[0].Assists}</p>
                            <p>Matches Played: {playerStat1[0].Matches_Played}</p>
                            <p>Position: {playerStat1[0].Position}</p>
                            <p>xG per 90: {playerStat1[0].xG_per_90}</p>
                        </div>
                    )}
                </div>

                <div className="player-2">
                    <input
                        type="text"
                        placeholder="Search for player 2..."
                        value={searchTerm2}
                        onChange={handleInputChange2}
                    />
                    {!selectedPlayer2 && searchTerm2 && (
                        <ul>
                            {filteredPlayers2.map((player, index) => (
                                <li key={index} onClick={() => handlePlayerSelect2(player.Player_Name)}>
                                    {player.Player_Name}
                                </li>
                            ))}
                        </ul>
                    )}

                    {selectedPlayer2 && playerStat2.length > 0 && (
                        <div className="player-stats">
                            <h2>{playerStat2[0].Player_Name} Stats</h2>
                            <p>Age: {playerStat2[0].Age}</p>
                            <p>Club: {playerStat2[0].Club}</p>
                            <p>Goals: {playerStat2[0].Goals}</p>
                            <p>Assists: {playerStat2[0].Assists}</p>
                            <p>Matches Played: {playerStat2[0].Matches_Played}</p>
                            <p>Position: {playerStat2[0].Position}</p>
                            <p>xG per 90: {playerStat2[0].xG_per_90}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlayerComparison;
