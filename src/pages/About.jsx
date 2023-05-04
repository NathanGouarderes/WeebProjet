import React from 'react';
import Navigation from '../components/Navigation';
import BoutonRetourAcceuil from '../components/BoutonRetourAcceuil';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
const About = () => {
    return (
        <div className='About'>
            
            <Navigation/>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eaque reprehenderit soluta saepe dolorum! Animi quae laborum magnam possimus, neque cum autem laudantium aspernatur quaerat architecto corrupti necessitatibus reiciendis dolorem.</p>
            <Slider/>
            <BoutonRetourAcceuil/>
            <Footer/>
            
        </div>
    );
};

export default About;