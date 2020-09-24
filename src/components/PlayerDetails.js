import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


function PlayerDetails() {

    const [playerDetails, setPlayerDetails] = useState([])
    
    
    useEffect(() => {
        const id = window.location.href.split("/").reverse()[0];
        const config = {
            method: "get",
            url: `https://api.football-data.org/v2/players/${id}`,
            headers: {
                "Content-Type": "application/json",
                "X-Auth-Token": "b75f515919a94829830c8199beb46c05",
           
            },
        };
    
        axios(config)
            .then((response) => {
                setPlayerDetails(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    if (playerDetails === undefined) {
        return <h3>Loading...</h3>;
      }
    


    
    return (
        <div>

        </div>

      );
    }
export default PlayerDetails;
