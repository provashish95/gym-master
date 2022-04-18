import React from 'react';
import useServices from '../../Hook/useServices';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WhyGymMaster from '../WhyGymMaster/WhyGymMaster';
import './Home.css';

const Home = () => {
    const services = useServices('services.json');
    const shortServices = services.slice(0, 3);

    return (
        <>
            <Banner></Banner>
            <section className="service-img">
                <div className="container">
                    <div className="row">
                        <h3 className='mt-5 text-center header-style'>SERVICES</h3>
                    </div>
                    <div className="row">
                        {
                            shortServices.map(service => <Services key={service.id} service={service}></Services>)
                        }
                    </div>
                </div>
            </section>
            <WhyGymMaster></WhyGymMaster>
        </>
    );
};

export default Home;