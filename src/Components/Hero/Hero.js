import React from 'react';
import './Hero.css';
import { Carousel } from 'react-bootstrap';

const Hero = () => {
    return (
        <div className="">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 hero-size"
                        src="https://i.ibb.co/8bNvDT0/beautiful-girl-dentist-1157-18577.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 hero-size"
                        src="https://i.ibb.co/ZS7hj8Z/beautiful-girl-sitting-dentist-s-office-1157-23489.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 hero-size"
                        src="https://i.ibb.co/HPFrLpC/dentists-treat-patients-teeth-1150-19646.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Hero;