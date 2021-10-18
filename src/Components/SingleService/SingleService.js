import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = (props) => {
    const { id, name, img, Experience } = props.service;
    return (
        <div className="col-lg-4 col-sm-12 card">
            <h2>Name {name}</h2>
            <img src={img} alt="" />
            <h3>Experience {Experience}</h3>
            <Link to={`/details/${id}`}>
                <button className="btn btn-warning">Check</button>
            </Link>
        </div>
    );
};

export default SingleService;

