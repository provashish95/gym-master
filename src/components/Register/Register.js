import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPass.value;

        createUserWithEmailAndPassword(email, password);
        navigate('/');
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    const navigateLogin = () => {
        navigate('/login');
    }
    return (
        <div className='container mt-3 mb-5 '>
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept gym master terms & condition" />
                    </Form.Group>
                    <Button className='w-50 mx-auto d-block mb-2' variant="dark" type="submit">
                        Register
                    </Button>
                </Form>
                <p>Already have an account? <span className='btn text-dark fw-bold' onClick={navigateLogin}>Please Login </span></p>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Register;