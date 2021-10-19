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
            <div className="row mt-5 background-co">
                <h1 className="services-head">Our services</h1>
                {
                    services.map(service => <SingleService
                        service={service}
                        key={service.id}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;