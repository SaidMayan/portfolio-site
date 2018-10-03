import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './Carousel.css';

class Carousel1 extends Component {
    render() {
        return (
          <div className="carousel2">
            <div className="scroll-left">
                <h3>An innovative approach to design and build that relies heavily on happiness</h3>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img  alt="899x500" src={require('../images/PAA-Option 3 - 1 – take 2.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="899x500" src={require('../images/PAA-Option 3 - 2 – take 2.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="899x500"src={require('../images/PAA-Option 3 - 3 – take 2.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="899x500" src={require('../images/PAA-Option 3 - 4 – take 2.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="899x500" src={require('../images/PAA-Option 3 - 5 – take 2.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="899x500" src={require('../images/PAA-Option 3 - 6 – take 2.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="899x500" src={require('../images/PAA-Option 3 - 7 – take 2.png')}/>
                </Carousel.Item>
            </Carousel>
            <br/>
            <h4 align="center">**Case study: Wireframes for e-commerce site redesign for independent menswear brand <a href="https://houseofpaa.com/">PAA</a></h4>
          </div>
         
        );
    }
}

export default Carousel1;
