import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './Carousel.css';

class Carousel1 extends Component {
    render() {
        return (
          <div className="carousel2">
            {/* <div className="scroll-left">
                <h3>An innovative approach to design and build that relies heavily on happiness</h3>
            </div> */}
            <Carousel>
                <Carousel.Item>
                    <img className="home-page-img" alt="899x500" src={require('../images/home-page-paa-screengrab.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="home-page-img" alt="899x500" src={require('../images/collection-page-paa-screengrab.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="home-page-img" alt="899x500"src={require('../images/product-page-paa-screengrab.png')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="home-page-img" alt="899x500" src={require('../images/stockist-page-paa-screengrab.png')}/>
                </Carousel.Item>
            </Carousel>
            <br/>
            <h4 align="center">**UX / Front End re-design for Shopify e-commerce website redesign for independent menswear brand <a className="paa-store" href="https://houseofpaa.com/">PAA</a></h4>
          </div>
         
        );
    }
}

export default Carousel1;
