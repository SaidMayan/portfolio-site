import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './CarouselCA4LC.css';

class CarouselCA4LC extends Component {
    render() {
        return (
          <div className="CarouselCA4LC">
            <Carousel className="CA4LC">
                <Carousel.Item>
                    <img className="CA4LCImg" width={488.5} height={250} alt="488.5x250" src={require('../images/CA4LC-1.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="CA4LCImg" width={488.5} height={250} alt="488.5x250" src={require('../images/CA4LC-2.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="CA4LCImg" width={488.5} height={250} alt="488.5x250" src={require('../images/CA4LC-3.png')}/>
                </Carousel.Item>
            </Carousel>
          </div>
        );
    }
}

export default CarouselCA4LC;
