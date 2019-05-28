import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './CarouselCA4LC.css';

class CarouselCA4LC extends Component {
    render() {
        return (
          <div className="CarouselCA4LC">
            
                    <img className="CA4LCImg"  alt="488.5x250" src={require('../images/CA4LC-1.png')}/>
            
                    <img className="CA4LCImg"  alt="488.5x250" src={require('../images/CA4LC-2.png')}/>

                    <img className="CA4LCImg"  alt="488.5x250" src={require('../images/CA4LC-3.png')}/>
          </div>
        );
    }
}

export default CarouselCA4LC;
