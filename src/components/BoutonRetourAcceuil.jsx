import React from 'react';
import { NavLink } from 'react-router-dom';

const BoutonRetourAcceuil = () => {
    return (
        <div>
            <NavLink to="/">
                <button>Retourner à l'acceuil</button>
            </NavLink>
        </div>
    );
};

export default BoutonRetourAcceuil;