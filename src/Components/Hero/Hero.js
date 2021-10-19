import React from 'react';
import './Hero.css';
import { Carousel } from 'react-bootstrap';

const Hero = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 hero-size"
                        src="https://i.ibb.co/8bNvDT0/beautiful-girl-dentist-1157-18577.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="hero">
                        <h1>General dentistry</h1>
                        <p>Invisalign, Lumineers (Porcelain Veneers), Smile Makeovers, Zoom Teeth Whitening.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 hero-size"
                        src="https://i.ibb.co/ZS7hj8Z/beautiful-girl-sitting-dentist-s-office-1157-23489.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="hero">
                        <h1>Cosmetic dentistry</h1>
                        <p>Cleanings, Complete Dental Exam, Digital X-Rays, Oral Cancer Screening.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 hero-size"
                        src="https://i.ibb.co/HPFrLpC/dentists-treat-patients-teeth-1150-19646.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="hero">
                        <h1>Restorative DENTISTRY</h1>
                        <p>Bridges, CEREC Restorations, Crowns, Dentures, Extractions, Dental Implants, Tooth Colored Fillings, Root Canal.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Hero;