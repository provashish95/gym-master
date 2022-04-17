import React, { useState } from 'react';
import './Register.css';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [userError, setUserError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger '>Error: {error?.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }

    const test = () => toast('wow');

    const navigateLogin = () => {
        navigate('/login');
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPass.value;
        console.log(password.length);
        if (password.length < 6) {
            setUserError('Password must be 6 character!');

        } else if (password !== confirmPassword) {
            setUserError('Password not matched');

        } else {
            setUserError('')
            createUserWithEmailAndPassword(email, password);
            navigate('/')
        }
    }


    return (
        <div className='container mt-3 mb-5 '>
            <ToastContainer />
            <div className='w-50 mx-auto '>
                <h4 className='text-center text-dark fw-bold mb-4'>Registration</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control name='name' type="text" placeholder="Enter Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Control name='confirmPass' type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <Form.Text className="text-danger text-center fw-bold">
                        {userError || ''}
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        {/* <Form.Check type="checkbox" label="Accept gym master terms & condition" /> */}
                        <Form.Check onClick={() => setAgree(!agree)} className={`fst-italic ${agree ? 'text-dark' : 'text-danger'}`} id='terms' name='terms' type="checkbox" label="Accept gym master terms & condition" />
                    </Form.Group>
                    <Button className='w-50 mx-auto d-block mb-2' variant="dark" type="submit" disabled={!agree}>
                        Register
                    </Button>
                    {errorElement}
                </Form>
                <p>Already have an account? <span className='btn text-dark fw-bold' onClick={navigateLogin}>Please Login </span></p>
                <SocialLogin></SocialLogin>
                <button onClick={test}>click me</button>
            </div>
        </div>
    );
};

export default Register;