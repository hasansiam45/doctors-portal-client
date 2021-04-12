import React from 'react';
import Winson from '../../../images/Ellipse 1.png';
import Ema from '../../../images/Ellipse 2.png';
import Nilkon from '../../../images/Ellipse 3.png';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
const testimonialData = [
    {
        name: 'Winson Herry',
        img: Winson,
        address: 'California'
    },
    
    {
        name: 'Ema Watson',
        img: Ema,
        address: 'Vienna'
    },
    
    {
        name: 'Nilkon Richard',
        img: Nilkon,
        address: 'London'
    }

]
const Testimonial = () => {

    return (
        <div className="container mt-5">
            
            <div className="text-center">
                <h5 className="text-primary">TESTIMONIAL</h5>
                <h2>What Our Patient Says</h2>
            </div>
            
            <div className="row">
            
            {
             testimonialData.map(details => <TestimonialDetails details={details}></TestimonialDetails>)
            }
            </div>
        </div>
    );
}

export default Testimonial;
