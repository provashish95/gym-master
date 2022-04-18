import React from 'react';
import './WhyGymMaster.css';
import gymImg from '../../images/banner/whyme.jpg';

const WhyGymMaster = () => {
    return (
        <div className='container-fluid bg-img'>
            <div className="container   ">
                <div className="row whyme-section justify-content-center align-items-center ">
                    <div className="col-sm-12 col-md-6 col-lg-6  ">
                        <h1 className=' text-center '>WHY GYM MASTER ?</h1>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p className='fs-5'><span><i className="fa-solid fa-circle-nodes"></i></span> <span>10+ years experience practicing weight/body training and flexible dieting</span></p>
                        <p className='fs-5'><span><i className="fa-solid fa-circle-nodes"></i></span> <span>Experience based on hundreds of previous clients</span></p>
                        <p className='fs-5'><span><i className="fa-solid fa-circle-nodes"></i></span> <span>1000+ satisfied local clients </span></p>
                        <p className='fs-5'><span><i className="fa-solid fa-circle-nodes"></i></span> <span>Professional and individual attitude to each client</span></p>
                        <p className='fs-5'><span><i className="fa-solid fa-circle-nodes"></i></span> <span>Not only you will change your body - you will also get a lot of knowledge</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyGymMaster;