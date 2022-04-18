import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const nameRef = useRef('');
    const navigate = useNavigate();

    const handleUserInfo = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        if (name) {
            navigate(`/notification/${name}`);
        } else {
            toast.error('Please enter your Name');
        }
    }
    return (
        <section className='container my-5'>
            <div className='w-50 mx-auto'>
                <h4 className='text-center my-4'>Checkout </h4>
                <Form onSubmit={handleUserInfo}>
                    <Form.Group className="mb-3" controlId="formBasicName">

                        <Form.Control ref={nameRef} type="text" placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNumber">

                        <Form.Control type="text" placeholder="Enter Phone Number" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows={2} required />
                    </Form.Group>
                    <Button className='w-50 mx-auto d-block mb-2' variant="dark" type="submit">
                        Confirm
                    </Button>
                </Form>
                <ToastContainer toastStyle={{
                    backgroundColor: "rgb(216, 216, 216)",
                    marginTop: "4rem",
                    color: "black",
                    borderRadius: "20px"
                }} />
            </div>


        </section>
    );
};

export default Checkout;