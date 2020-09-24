import React, { useState, useEffect } from "react";
import axios from "axios";

function TeamList() {
    const [team, setTeam] = useState([]);
    
    useEffect(() => {
        axios.get('https://api.football-data.org/v2/teams')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    })

	return (
		<div>
			<p>{team}</p>
			<button>Click Me</button>
		</div>
	);
}

export default TeamList;
