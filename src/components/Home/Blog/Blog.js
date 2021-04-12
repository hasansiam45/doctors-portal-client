import React from 'react';
import BlogDetails from '../BlogDetails/BlogDetails';
import img from '../../../images/Ellipse 1.png'
const blogData = [

    {
        name: 'Dr.Caudi',
        date: new Date().toISOString().split('T')[0],
        quote: 'Check at least a doctor in a year for your teeth',
        img: img
    },
    {
        name: 'Dr.John',
        date: new Date().toISOString().split('T')[0],
        quote: 'Two time brush in a day',
        img: img
    },
    {
        name: 'Dr.Michel',
        date: new Date().toISOString().split('T')[0],
        quote: 'The tooth cancer is taking a challenge',
        img: img
    }

]
const Blog = () => {
    return (
        <div className="mt-5 container">
            <div className="text-center">
            <h5 className="text-primary">OUR BLOG</h5>
            <h2>From Our Blog News</h2>
            </div>
            
            <div className="row mt-5">
                {
                blogData.map(blog => <BlogDetails blog={blog}></BlogDetails>)
                }
            </div>
            
        </div>
    );
}

export default Blog;
