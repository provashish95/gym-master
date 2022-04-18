import React from 'react';
import profile from '../../images/profile/provashish.jpg';

const About = () => {
    return (
        <div className='container my-5'>
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <h5 className='text-center mb-4'><span><i class="fa-solid fa-person-walking-arrow-right fs-3"></i></span> GOAL OF FUTURE</h5>
                    <p>Next every day I will learn web development sincerely.And I will  explore new technologies, make some big projects for my CV there I will attach my every knowing technologies and experiences .After finishing a programming hero course I will search a entry level job.I think real time experience is best  for my future career And I wish I want to be a good web developer and good human also! </p>
                    <p> I want to become a well trained Web Developer that knows how to create, design and modify web content. who Has
                        experience in analyzing customer needs, working with teams and using software for manipulating
                        multimedia content. With the capacity to adapt and learn fast, knows how to apply all stages of
                        web development, I want to build my career as a developer in your company and I am passionate
                        about ICT & IT related works.
                    </p>
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