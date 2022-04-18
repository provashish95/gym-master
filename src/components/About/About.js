import React from 'react';
import profile from '../../images/profile/provashish.jpg';

const About = () => {
    return (
        <div className='container my-5'>
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h5 className='text-center mb-4'><span><i class="fa-solid fa-person-walking-arrow-right fs-3"></i></span> GOAL OF FUTURE</h5>
                    <p>Next every day I will learn web development sincerely.And I will  explore new technologies, make some big projects for my CV there I will attach my every knowing technologies and experiences .After finishing a programming hero course I will search a entry level job.I think real time experience is best  for my future career And I wish I want to be a good web developer and good human also! </p>

                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className='text-center'>
                        <img src={profile} alt="profile" className='rounded-circle shadow-lg  mb-5 bg-body rounded' style={{ height: 300 }} />
                        <h5>Provashish Roy</h5>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;