import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './CarouselCrudye.css';

class CarouselCrudye extends Component {
    render() {
        return (
          <div className="CarouselCrudye">
            <Carousel className="Crudye">
                <Carousel.Item>
                    <img className="CruddyImg" width={488.5} height={250} alt="488.5x250" src={require('../images/CRUDYE-1.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="CruddyImg" width={488.5} height={250} alt="488.5x250" src={require('../images/CRUDYE-2.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="CruddyImg" width={488.5} height={250} alt="488.5x250" src={require('../images/CRUDYE-3.png')}/>
                </Carousel.Item>
            </Carousel>
          </div>
        );
    }
}

export default CarouselCrudye;
