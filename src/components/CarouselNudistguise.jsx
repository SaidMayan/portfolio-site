import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './CarouselNudistguise.css';

class CarouselNudistguise extends Component {
    render() {
        return (
          <div className="CarouselNudistguise">
            <Carousel className="Nudistguise">
                <Carousel.Item>
                    <img className="NudistguiseImg" width={488.5} height={250} alt="488.5x250" src={require('../images/e-commerce-nudistguise-1.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="NudistguiseImg" width={488.5} height={250} alt="488.5x250" src={require('../images/e-commerce-nudistguise-2.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="NudistguiseImg" width={488.5} height={250} alt="488.5x250" src={require('../images/e-commerce-nudistguise-3.png')}/>
                </Carousel.Item>
            </Carousel>
          </div>
        );
    }
}

export default CarouselNudistguise;