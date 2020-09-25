import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function PlayersList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const id = window.location.href.split("/").reverse()[0];
    const config = {
      method: "get",
      url: `http://api.football-data.org/v2/teams/${id}`,
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "00790e41e6fc4447b2e54f2afd7d82dd",
        // "X-Auth-Token": "b75f515919a94829830c8199beb46c05",
      },
    };

    axios(config)
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  if (players.squad === undefined) {
    return <h3>Loading...</h3>;
  }

  return players.squad.map((player, i) => (
    <Link to={`player/${player.id}`}>
      <p>
        {player.name} {"-"} {player.position};
      </p>
    </Link>
  ));
}

export default PlayersList;
