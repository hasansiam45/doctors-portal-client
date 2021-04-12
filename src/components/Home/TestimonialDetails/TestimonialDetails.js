import React from 'react';

const TestimonialDetails = ({details}) => {
    return (
        <div className ="col-md-4 shadow p-3 bg-white rounded">
            
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ab, nam doloremque fugiat voluptates deserunt eligendi beatae eos recusandae accusamus dicta sunt fuga in vel nihil asperiores aut earum laboriosam. </p>
           
            <div className="d-flex">
                <div className="mr-3">
                    <img src={details.img} alt=""/>
                </div>
                <div>
                    <h4>{details.name}</h4>
                    <h6>{details.address}</h6>
                </div>
            </div>
        </div>
    );
}

export default TestimonialDetails;
