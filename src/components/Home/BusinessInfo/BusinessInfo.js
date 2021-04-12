import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
const infoData = [
 
    {
        title: 'Opening Hours',
        desc: 'We are open at 7.00 am',
        icon: faClock,
        bg: 'primary'
    },
    {
        title: 'Visit Our Location',
        desc: 'NY 1200, USA',
        icon: faMapMarker,
        bg: 'dark'
    },
    {
        title: 'Call Us Now!',
        desc: '+1000222000',
        icon: faPhone,
        bg: 'primary'
    }
            


];
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            
            <div className="row w-75">
            {
              infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
}

export default BusinessInfo;
