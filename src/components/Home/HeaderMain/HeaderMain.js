import React from 'react';
import chair from '../../../images/chair.png';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <main style={{height: '500px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h2 style={{color: '#3A4256'}}>Your New Smile <br /> Starts Here</h2>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sint deserunt molestiae ab inventore consequuntur numquam cupiditate repellendus facere minus.</p>
                <button className = "btn-grad" > GET APPOINTMENT </button>
                
            </div>
            
            <div className="col-md-6 d-none d-md-block">
             <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
}

export default HeaderMain;
