import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div className="row">

            <div>
                <h3>Single {singleEmployee?.name}</h3>

            </div>
            <div>

            </div>

        </div>
    );
};

export default Details;