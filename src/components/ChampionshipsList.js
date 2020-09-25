import React, { useState} from "react";
// import axios from "axios";
import { Link} from "react-router-dom";
import { Button, Col, Row, Container } from 'react-bootstrap';

// import Bundesliga from '../img/Bundesliga.png';
// import Eredivisie from '../img/Eredivisie.png';
// import LaLiga from '../img/LaLiga.png';
// import Ligue1 from '../img/Ligue1.png';
// import PremierLeague from '../img/PremierLeague.png';
// import SerieA from '../img/SerieA.png';

function ChampionshipsList() {
	const [championships, setChampionship] = useState([
		{
			id: 2021,
			name: "Premier League",
			img: "../img/PremierLeague.png",
		},
		{
			id: 2002,
			name: "Bundesliga",
			img: "../src/img/Bundesliga.png",
		},
		{
			id: 2003,
			name: "Eredivisie",
			img: "../src/img/Eredivisie.png",
		},
		{
			id: 2014,
			name: "La Liga",
			img: "../src/img/LaLiga.png",
		},
		{
			id: 2015,
			name: "Ligue 1",
			img: "../src/img/Ligue1.png",
		},
		{
			id: 2019,
			name: "Serie A",
			img: "../src/img/SerieA.png",
		},
	]);

	// useEffect(() => {
	//         var config = {
	//           method: "get",
	//           url: "https://api.football-data.org/v2/competitions/2021/teams",
	//           headers: {
	//             "X-Auth-Token": "00790e41e6fc4447b2e54f2afd7d82dd",
	//           },
	//         };

	//         axios(config)
	//             .then(function (response) {
	//                 console.log(JSON.stringify(response.data));
	//                 setChampionship(response.data)
	//             })
	//             .catch(function (error) {
	//                 console.log(error);
	//             });

	// }, []);

	// if (championships.teams === undefined) {
	//     return (
	//         <p>Loading...</p>
	//     )
	// }

	const championshipList = championships.map((championship, index) => (
    <Link
      key={index}
      style={{ textDecoration: "none", textAlign: "center" }}
      to={`/championships/${championship.id}`}
    >
      <Button style={btnStyle}>{championship.name}</Button>
      {/* <img src={require("../img/Bundesliga.png")} alt ="fuckkkkkkkkk"/> */}
    </Link>
	));
	

	return (
	<Container>
      	<Row>
			<Col>				
					{championshipList}				
			</Col>
		</Row>
	</Container>
					
					
	);
}

const btnStyle = {
	margin: '10px',
	padding: '5px'
}

export default ChampionshipsList;
