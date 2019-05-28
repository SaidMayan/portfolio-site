import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';
import Carousel1 from './Carousel.jsx';

export default class Home extends Component {
  render() {
    return (

        <div className="Home">
          <div className="carousel-first">
            <Carousel1 />
          </div>

        </div>



    )
  }
}
