import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './CarouselCrudye.css';

class CarouselCrudye extends Component {
    render() {
        return (
          <div className="CarouselCA4LC">
        
                    <img className="CA4LCImg" alt="488.5x250" src={require('../images/CRUDYE-1.png')}/>

                    <img className="CA4LCImg" alt="488.5x250" src={require('../images/CRUDYE-2.png')}/>

                    <img className="CA4LCImg" alt="488.5x250" src={require('../images/CRUDYE-3.png')}/>

          </div>
        );
    }
}

export default CarouselCrudye;
