import React from "react";
import { Carousel } from "react-bootstrap";
//  imported image as variable
import teamsImg from "../../images/teams.jpg";
import playersImg from "../../images/players.jpg";
import coachesImg from "../../images/coaches.jpg";


function CarouselHomePage() {
   
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={teamsImg /* replaced require with variable name */}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 style={h3Style}>Teams</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={playersImg}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 style={h3Style}>Players</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={coachesImg}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 style={h3Style}>Coaches</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

const h3Style = {
    backgroundColor: 'black',
    color: 'white',
    decoration : 'none'
}

export default CarouselHomePage;

