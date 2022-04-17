import React from 'react';
import profile from '../../images/profile/provashish.jpg';

const About = () => {
    return (
        <div className='container my-5'>
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h1 className='text-center'>About me !</h1>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className='text-center'>
                        <img src={profile} alt="profile" className='rounded-circle shadow-lg  mb-5 bg-body rounded' style={{ height: 300 }} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;