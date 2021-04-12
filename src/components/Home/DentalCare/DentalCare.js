import React from 'react';
import Mask from '../../../images/Mask Group 3.png';
import './DentalCare.css'
const DentalCare = () => {
    return (
        <div className ="d-flex justify-content-center" >
            <div className="row w-75 mt-5">
                <div className="col-md-5">
                   <img className="img-fluid" src={Mask} alt=""/>
                </div>

                <div className="col-md-7">
                    <h2>Exceptional Dental <br /> Care, On Your Terms</h2>
                    <p className = "text-secondary" > Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dolorem beatae voluptatum, dolores ut rerum dicta, voluptate sapiente incidunt obcaecati deserunt explicabo officia laudantium ipsa ea voluptates veniam maxime nihil non culpa rem enim recusandae id fuga tempora!Perspiciatis ad incidunt sed.Corporis laudantium repellat quo minus iusto temporibus eum, minima, ratione vel consectetur deserunt amet maxime nemo et reprehenderit blanditiis ratione vel consectetur deserunt amet maxime nemo et reprehenderit blanditiis. </p>
                    
                    <button className = "btn-grad" > Learn More </button>
                </div>
                
            </div>
        </div>
    );
}

export default DentalCare;
