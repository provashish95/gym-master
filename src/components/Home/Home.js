import React from 'react';
import useServices from '../../Hook/useServices';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WhyGymMaster from '../WhyGymMaster/WhyGymMaster';

const Home = () => {
    const services = useServices('services.json');
    //console.log(services);
    const shortServices = services.slice(0, 3);
    //console.log(shortServices);
    return (
        <>
            <Banner></Banner>
            <div id='services' className='container my-5'>
                <h4 className='text-center text-black mb-5'>SERVICES</h4>
                <div className="row justify-content-center g-4 ">
                    {
                        shortServices.map(service => <Services key={service.id} service={service}></Services>)
                    }

                </div>
            </div>
            <WhyGymMaster></WhyGymMaster>
        </>
    );
};

export default Home;