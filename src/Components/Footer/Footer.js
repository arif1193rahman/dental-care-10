import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faPhoneVolume,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">

                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h3 className="contract">Contract us  </h3>
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5>+88017237658678</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">

                                    <div>
                                        <p>
                                            223 Kazi Nojrul Islam Sarak,
                                            <br /> Barishal, Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>Best Trainer for All</h1>
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>

                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                </div>
                                <p className="mt-4 ">
                                    <small>
                                        This is online tutor banner for online course <br />
                                        Create free tutor flyers, posters, social media graphics and videos in minutes
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>Arifur Rahman © All rights Goes to Programming Hero</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">About</li>
                                    <li className="footer-menu">Service</li>
                                    <li className="footer-menu">Sign In</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;