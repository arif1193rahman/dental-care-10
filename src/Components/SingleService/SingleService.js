import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = (props) => {
    const { id, name, img, details } = props.service;
    return (
        <div className="col-lg-6 col-sm-12 card">

            <img src={img} alt="" />
            <h2> {name}</h2>
            <h5>{details}</h5>
            <Link to={`/details/${id}`}>
                <button className="btn btn-warning">Check</button>
            </Link>
        </div>
    );
};

export default SingleService;

