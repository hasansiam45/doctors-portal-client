import React from 'react';

const DoctorDetails = ({doctor}) => {
    return (
        <div className="text-center col-md-4">
            <img className="img-fluid" src={doctor.img} alt="" />
            <h4>{doctor.name}</h4>
            <small>{doctor.mob}</small>
        </div>
    );
}

export default DoctorDetails;
