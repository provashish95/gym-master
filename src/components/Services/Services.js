import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = ({ service }) => {
    const navigate = useNavigate();
    const { name, price, description, img, time } = service;

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 my-5'>
            <div className="card mx-auto  p-3 mb-2 rounded" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><span className='fw-bold'>Overview</span> {description}</p>
                    <p className="card-text"><span className='fw-bold'>Time</span> {time}</p>
                    <p className="card-text"><span className='fw-bold'>Fee</span> {price}</p>
                    <button onClick={() => navigate('/checkout')} className='btn btn-dark d-block mx-auto'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Services;