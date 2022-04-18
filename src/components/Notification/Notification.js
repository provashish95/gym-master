import React from 'react';


const Notification = ({ userName }) => {

    console.log(userName);
    return (
        <section className='container  my-5' style={{ height: '18.5rem' }}>
            <div className="card w-50 mx-auto" style={{ width: '18rem' }}>
                <div className="card-body">
                    <div className="row justify-content-center align-items-center">
                        <h3 className="card-title text-center fst-italic">Dear {userName}, thank you for the booking... </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Notification;