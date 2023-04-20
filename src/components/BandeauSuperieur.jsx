import React from 'react';
import Navigation from './Navigation';
import BarreDeRecherche from './BarreDeRecherche';

const BandeauSuperieur = () => {
    return (
        <div className='bandeauSuperieur'>
            <Navigation/>
            <BarreDeRecherche/>
        </div>
    );
};

export default BandeauSuperieur;