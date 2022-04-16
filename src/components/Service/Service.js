import React from 'react';

const Service = ({ service }) => {
    console.log(service);
    const { name, price, description, img } = service;

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 '>
            <div className="card mx-auto shadow-lg p-3 mb-2 bg-body rounded" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Overview: {description}</p>
                    <p className="card-text">Fee: {price}</p>
                    <button className='btn btn-outline-dark d-block mx-auto'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;