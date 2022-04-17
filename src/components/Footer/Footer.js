import React from 'react';
import google from '../../images/social/google.jpg';
import twitter from '../../images/social/twitter.jpg';
import github from '../../images/social/github.png';
import facebook from '../../images/social/facebook.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    let date = new Date().getFullYear();
    return (
        <div className='bg-dark p-5 text-center'>
            <p className='text-center text-white text-muted'>&copy; Copyright {date} | Gym Master</p>
            <p className='text-center text-white text-muted'>Get stronger and fitter with Master</p>
            <Link to='/' className='text-decoration-none'> <img style={{ width: '30px' }} className='border border-white rounded-circle ms-2 ' src={google} alt="googleLogo" /></Link>
            <Link to='/' className='text-decoration-none'> <img style={{ width: '30px' }} className='border border-white rounded-circle ms-2 ' src={facebook} alt="googleLogo" /></Link>
            <Link to='/' className='text-decoration-none'> <img style={{ width: '30px' }} className='border border-white rounded-circle ms-2 ' src={twitter} alt="googleLogo" /></Link>
            <Link to='/' className='text-decoration-none'> <img style={{ width: '30px' }} className='border border-white rounded-circle ms-2 ' src={github} alt="googleLogo" /></Link>
        </div>
    );
};

export default Footer;