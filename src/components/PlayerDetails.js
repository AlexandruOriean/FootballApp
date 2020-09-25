import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PlayerDetails() {
  const [playerDetails, setPlayerDetails] = useState([]);

  useEffect(() => {
    const id = window.location.href.split("/").reverse()[0];
    const config = {
      method: "get",
      url: `https://api.football-data.org/v2/players/${id}`,
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "00790e41e6fc4447b2e54f2afd7d82dd",
      },
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
        setPlayerDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (playerDetails === undefined) {
    return <h3>Loading...</h3>;
  }

  return <div></div>;
}
export default PlayerDetails;
