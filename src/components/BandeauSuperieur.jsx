import React from 'react';
import Navigation from './Navigation';
import BarreDeRecherche from './BandeauBienvenue';

const BandeauSuperieur = () => {
    return (
        <div className='bandeauSuperieur'>
            <Navigation/>
            {/* <BarreDeRecherche/> */}
        </div>
    );
};

export default BandeauSuperieur;