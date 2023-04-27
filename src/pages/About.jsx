import React from 'react';
import Navigation from '../components/Navigation';
import BoutonRetourAcceuil from '../components/BoutonRetourAcceuil';

const About = () => {
    return (
        <div className='About'>
            
            <Navigation/>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus eaque reprehenderit soluta saepe dolorum! Animi quae laborum magnam possimus, neque cum autem laudantium aspernatur quaerat architecto corrupti necessitatibus reiciendis dolorem.</p>
            <BoutonRetourAcceuil/>
        </div>
    );
};

export default About;