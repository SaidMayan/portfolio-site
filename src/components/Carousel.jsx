import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './Carousel.css';

class Carousel1 extends Component {
    render() {
        return (
          <div className="carousel2">
            <div className="scroll-left">
                <h3>An innovative approach to design and build that relies heavily on happiness / harmony...</h3>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img width={500} height={500} alt="500x500" src={require('../images/host-1.jpg')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="500x500" src={require('../images/host-2.jpg')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="500x500" src={require('../images/host-3.jpg')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="500x500" src={require('../images/host-4.jpg')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="500x500" src={require('../images/host-5.jpg')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="500x500" src={require('../images/host-6.jpg')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="500x500" src={require('../images/host-7.jpg')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="500x500" src={require('../images/host-8.jpg')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="500x500" src={require('../images/host-9.jpg')}/>
                </Carousel.Item>
            </Carousel>
          </div>
        );
    }
}

export default Carousel1;
