import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    return (
        <div className='container mt-3 mb-5 '>
            <div className='w-50 mx-auto '>
                <h4 className='text-center text-dark fw-bold mb-4'>Login</h4>
                <Form >

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-50 mx-auto d-block mb-2' variant="dark" type="submit">
                        Login
                    </Button>
                </Form>
                <p>New to gym master ? <span className='btn text-dark fw-bold' >Please Register </span></p>
                <SocialLogin></SocialLogin>
            </div>

        </div>
    );
};

export default Login;