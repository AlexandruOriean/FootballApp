import React, { useState, useEffect } from "react";
import axios from "axios";

function PlayersList() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const config = {
            method: "get",
            url: "http://api.football-data.org/v2/competitions/2019",
            headers: {
                "Content-Type": "application/json",
                "X-Auth-Token": "00790e41e6fc4447b2e54f2afd7d82dd",
            },
        };

        axios(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    });
    return <div>{players}</div>;
}

export default PlayersList;
