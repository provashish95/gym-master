import React from 'react';
import google from '../../images/social/google.jpg';
import github from '../../images/social/github.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center my-2'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>

            <div>
                <button className='btn btn-dark w-50 mx-auto d-block  my-2'>
                    <img style={{ width: '30px' }} className='rounded-circle' src={google} alt="googleLogo" />
                    <span className='px-2 '> Google sign in</span>
                </button>
                <button className='btn btn-dark w-50 mx-auto d-block  my-2'>
                    <img style={{ width: '30px' }} src={github} alt="googleLogo" />
                    <span className='px-2 '>GitHub sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;         