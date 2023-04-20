import React from 'react';
import { NavLink } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web'
import BarreDeRecherche from './BarreDeRecherche';


const Navigation = () => {

    const spring = useSpring({
        from: {x : -100},
        to: {x : 0},

    })

    return (
        <div className="navigation">
            <animated.div style={{
                ...spring
            }}>
            <ul className='ulNavigation'>
                <NavLink to="/">
                <li className='li'>Acceuil</li>
                </NavLink>
                <NavLink to="/about">
                    <li className='li'>A propos</li>
                </NavLink>
                <NavLink to="/page">
                    <li className='li'>Aled</li>
                </NavLink>
                <NavLink to="/connexion">
                    <li className='li'><img id='photoDeProfil' src="https://i.pinimg.com/236x/0f/97/84/0f97847db0ffe76db2ffabdd7d80cf6a--merovingian-christianity.jpg" alt="photoDeProfil" /></li>
                </NavLink>
            </ul>
            
            </animated.div>
        </div>
    );
};

export default Navigation;