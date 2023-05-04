import React from 'react';
import Navigation from '../components/Navigation';
import ListeAnime from '../components/ListeAnime';
import BandeauSuperieur from '../components/BandeauSuperieur';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='Style'>
            <BandeauSuperieur/>
            <ListeAnime/>
            <Footer/>
        </div>
    );
};

export default Home;