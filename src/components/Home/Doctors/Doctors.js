import React from 'react';
import doctorImg from '../../../images/5790-removebg.png';
import DoctorDetails from '../DoctorDetails/DoctorDetails';
const doctorDetails = [
    {
        name: 'Dr.Coudi',
        mob: +61000222111,
        img: doctorImg
    },
    {
        name: 'Dr.Coudi',
        mob: +61000222111,
        img: doctorImg
    },
    {
        name: 'Dr.Coudi',
        mob: +61000222111,
        img: doctorImg
    }
        
]
const Doctors = () => {
    return (
        <div className="m-5">
            <h5 className="text-center text-primary">OUR DOCTORS</h5>
            <div className="row">
                {
                 doctorDetails.map(doctor => <DoctorDetails doctor={doctor}></DoctorDetails>)
                }
            </div>
        </div>
    );
}

export default Doctors;
