import React from 'react';

const BarreDeRecherche = () => {
    return (
        <div className='grandeBarreDeRecherce'>
            <h1 className='titreBienvenue'>Bienvenue</h1>
            <h3 className='h3weeb'>Des milliers d'animés et de trucs de weebs</h3>
            <div className='barreDeRecherche'>
                <input className='inputRecherche' type="text" placeholder='Rechercher' />
            </div>
        </div>
    );
};

export default BarreDeRecherche;