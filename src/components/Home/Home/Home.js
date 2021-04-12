import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import DentalCare from '../DentalCare/DentalCare';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default Home;
