import React from 'react';
import google from '../../images/social/google.jpg';
import github from '../../images/social/github.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (loading || gitLoading) {
        return <Loading></Loading>
    }

    if (error || gitError) {
        errorElement = <p className='text-danger'>Error: {error?.message}  {gitError?.message} </p>
    }

    if (user || gitUser) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center my-2'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-50 mx-auto d-block  my-2'>
                    <img style={{ width: '30px' }} className='rounded-circle' src={google} alt="googleLogo" />
                    <span className='px-2'> Google sign in</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-dark w-50 mx-auto d-block  my-2'>
                    <img style={{ width: '30px' }} src={github} alt="googleLogo" />
                    <span className='px-2 '>GitHub sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;         