import React from 'react';
import Navigation from '../components/Navigation';
import ListeAnime from '../components/ListeAnime';
import BandeauSuperieur from '../components/BandeauSuperieur';

const Home = () => {
    return (
        <div className='Style'>
            <BandeauSuperieur/>
            <ListeAnime/>
            
        </div>
    );
};

export default Home;