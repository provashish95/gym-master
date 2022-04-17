import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (loading || sending) {
        return <Loading></Loading>
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please enter your email');
        }
    }

    return (
        <div className='container mt-3 mb-5 '>

            <div className='w-50 mx-auto '>
                <h4 className='text-center text-dark fw-bold mb-4'>Login</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-50 mx-auto d-block mb-2' variant="dark" type="submit">
                        Login
                    </Button>
                </Form>
                {
                    errorElement
                }
                <p>Forget Password?<span className='btn text-dark fst-italic fw-bold' onClick={resetPassword}>Reset Password</span></p>

                <p>New to gym master?<span className='btn text-dark fst-italic fw-bold' onClick={() => navigate('/register')} >Please Register </span></p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>

        </div>
    );
};

export default Login;