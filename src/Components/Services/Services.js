import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/fakeService.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1>Services {services.length}</h1>
            <div className="row">
                {
                    services.map(service => <SingleService service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;