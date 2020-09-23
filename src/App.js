import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Carousel, Container } from 'react-bootstrap';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Home/>
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./images/teams.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: 'black'}}>First slide label</h3>
            <p style={{ color: 'black' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./images/players.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ color: 'black' }}>Second slide label</h3>
            <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./images/coaches.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel> */}
      </Container>
    </div>
  );
}

export default App;
