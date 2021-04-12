import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center mt-5">
            <img style={{height: '50px', padding: '10px'}} src={service.img} alt="" />
            <h5 style={{padding: '10px'}}>{service.name}</h5>
            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla reiciendis cum sunt asperiores tempora error.</p>
        </div>
    );
}

export default ServiceDetails;
