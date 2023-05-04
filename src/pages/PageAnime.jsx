import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import DetailsAnime from '../components/RécupérerDetailsAnime';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PageAnime = (props) => {

    return (
        <div>
            <Navigation/>
        <DetailsAnime/>
        <Footer/>
        </div>
    );
};

export default PageAnime;