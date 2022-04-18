import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Notification from '../Notification/Notification';

const Checkout = () => {
    const nameRef = useRef('');

    const [userName, setUserName] = useState('');

    const handleUserInfo = (event) => {
        event.preventDefault();
        const userName = nameRef.current.value;
        if (userName) {
            setUserName(userName);
        }
    }
    return (
        <section className='container my-5'>
            {
                userName
                    ?
                    <Notification userName={userName}></Notification>
                    :

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
                    </div>

            }

        </section>
    );
};

export default Checkout;