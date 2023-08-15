import React from 'react';
import Carousel from 'better-react-carousel';
import './Commercial.css';
import pic1 from './rendered/1comm.jpg';
import pic2 from './rendered/2comm.jpg';
import pic3 from './rendered/3.jpg';
import pic4 from './rendered/4.jpg';
import pic5 from './rendered/5.jpg';
import pic6 from './rendered/6.jpg';
import pic7 from './rendered/7.jpg';
import pic8 from './rendered/8.jpg';

const Commercial = () => {
    return (
        <div className='commercial-container'>
            <Carousel
                cols={1}
                rows={1}
                gap={10}
                loop
                autoplay={5000}
                className='commercial'>
                <Carousel.Item>
                    <img width="100%" src={pic1} alt="Image 1"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={pic2} alt="Image 2"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={pic3} alt="Image 3"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={pic4} alt="Image 4"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={pic5} alt="Image 5"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={pic6} alt="Image 6"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={pic7} alt="Image 7"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width="100%" src={pic8} alt="Image 8"/>
                </Carousel.Item>
                {/* ... */}
            </Carousel>
        </div>
    );
}

export default Commercial;
