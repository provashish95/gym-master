import React from 'react';
import useServices from '../../Hook/useServices';
import Service from '../Service/Service';

const Services = () => {
    const services = useServices('services.json');

    return (
        <div className='container my-5'>
            <h2>This is services</h2>
            <div className="row justify-content-center  g-4 ">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;