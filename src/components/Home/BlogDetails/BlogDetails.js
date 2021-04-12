import React from 'react';

const BlogDetails = ({blog}) => {
    return (
            <div className ="col-md-4 shadow p-3 bg-white rounded">
           
            <div className="d-flex">
                <div className="mr-3">
                    <img src={blog.img} alt=""/>
                </div>
                <div>
                    <h4>{blog.name}</h4>
                    <h6>{blog.date}</h6>
                </div>
            </div>
            
               <h3 className="mt-4 mb-4">{blog.quote}</h3>
            
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ab, nam doloremque fugiat voluptates deserunt eligendi beatae eos recusandae accusamus dicta sunt fuga in vel nihil asperiores aut earum laboriosam. </p>
        </div>
    );
}

export default BlogDetails;
