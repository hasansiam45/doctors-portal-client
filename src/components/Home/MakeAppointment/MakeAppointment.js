import React from 'react';
import doctor from '../../../images/5790-removebg.png';
import './MakeAppointment.css'
const MakeAppointment = () => {
    return (
        <section className="make-appointment"> 
        <div className="container">
            <div className="row">
                <div className="col-md-5 d-none d-md-block">
                  <img className="" src={doctor} alt=""/>
                </div>
                    <div className="col-md-7">
                    <div>
                    <h5 className="text-primary mt-5">Appointment</h5>
                    <h2 className="text-white mt-5">Make An Appointment Today</h2>
                    <p className="text-white mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut quis deleniti nemo culpa? Unde!</p>
                    <button className="btn-grad" > Learn More </button>
                    </div>
                </div>
            </div>
            </div>
            </section>
    );
}

export default MakeAppointment;
