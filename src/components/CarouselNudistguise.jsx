import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './CarouselNudistguise.css';

class CarouselNudistguise extends Component {
    render() {
        return (
          <div className="CarouselCA4LC">
                    <img className="CA4LCImg" width={488.5} height={250} alt="488.5x250" src={require('../images/e-commerce-nudistguise-1.png')}/>

                    <img className="CA4LCImg" width={488.5} height={250} alt="488.5x250" src={require('../images/e-commerce-nudistguise-2.png')}/>

                    <img className="CA4LCImg" width={488.5} height={250} alt="488.5x250" src={require('../images/e-commerce-nudistguise-3.png')}/>

          </div>
        );
    }
}

export default CarouselNudistguise;