import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const { serviceId } = useParams();
    const [single, setSingle] = useState([]);
    const [singleEmployee, setSingleEmployee] = useState([])

    useEffect(() => {
        fetch('/singleService.json')
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [])

    useEffect(() => {
        const singleService = single?.find(service => service.id == serviceId);
        setSingleEmployee(singleService)
    }, [single])

    return (
        <div className="row container p-5">
            <div className="col-lg-6 col-sm-12">
                <h3>{singleEmployee?.name}</h3>
                <p>{singleEmployee?.details}</p>
                <h3>Clinic: {singleEmployee?.clinic}</h3>
            </div>
            <div className="col-lg-6 col-sm-12">
                <img src={singleEmployee?.img} alt="" />
            </div>
        </div>
    );
};

export default Details;