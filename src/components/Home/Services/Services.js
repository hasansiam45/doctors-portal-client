import React from 'react';
import fluoride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/white.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';



const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }


];


const Services = () => {
    return (
        
        <section className="services mt-5">
            <div className="text-center">
               <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
               <h2 style={{color: '#3A4256'}}>Services we provide</h2>
            </div>
            
              <div className="d-flex justify-content-center">
            
            <div className="row w-75 mt-3">
            {
              serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
            }
            </div>
        </div>
            
            
        </section>
        
       
    );
}

export default Services;
