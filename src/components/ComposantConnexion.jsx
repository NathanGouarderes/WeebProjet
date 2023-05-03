import { useSpring, animated } from '@react-spring/web';
import React from 'react';
import { NavLink } from 'react-router-dom';
import BoutonRetourAcceuil from './BoutonRetourAcceuil';

const ComposantConnexion = () => {

    const springTranslucide = useSpring({
        opacity : 0.3,
        from: {opacity : 0},
        config: {duration : 1500}
    })

    const springDur = useSpring({
        opacity: 1,
        from: {opacity : 0},
        config: {duration : 1500}
    })

    return (
        <div className='connexion'>
                <div className='boxConnexion'>
                        <div className='saisieConnexion'>
                            <h1 className='h1Connexion'>Connexion</h1>
                            <div className='saisiePseudo'>
                                <input className='inputConnexion' type="text" name="pseudo" placeholder='Pseudo' required/>
                            </div>
                            <div className='saisieMDP'>
                                <input className='inputConnexion' type="password" name="password" placeholder='Mot de passe' required/>
                            </div>
                            <div>
                                <NavLink to="/">
                                    <button className='boutonConnexion'>Se connecter</button>
                                </NavLink>
                                
                            </div>
                            <BoutonRetourAcceuil/>
                        </div>
                </div>
        </div>
    );
};

export default ComposantConnexion;