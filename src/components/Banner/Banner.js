import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner-1.jpg';
import banner2 from '../../images/banner/banner-2.jpg';
import banner3 from '../../images/banner/banner-3.jpg';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <section className='banner'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="FirstSlide"
                    />
                    <Carousel.Caption>
                        <h4>Get Ready</h4>
                        <p>Fitness is not a destination. It is a way of life</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h4>Don't Give Up</h4>
                        <p >Make yourself stronger than your excuses.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h4>Make yourself proud</h4>
                        <p>
                            Push harder than yesterday if you want a different tomorrow
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Banner;