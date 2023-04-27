import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web'
import { NavLink } from 'react-router-dom';



const Anime = (props) => {
    console.log(props.anime)
    const [synopis, setSynopsis] = useState("");
    const [afficherText, setAfficherText] = useState(false);

    const springs = useSpring({
        width: "320px",
        opacity : 1,
        from: { opacity : 0},
        config : { duration : 1500}
    })

    const afficherAnime = useSpring({
        width: '50vh',
        height: 'auto',
        from: {height: "auto"},
    });

    const AfficherSynopis = () => {
        
        console.log("ALED");
        const newText = props.anime.synopsis;
        setSynopsis(newText);
        setAfficherText(!afficherText);
    };
    
    return (
        <div className='boxAnime'>
            <animated.div style={{
                ...springs,
            }}>
        
            <li className="anime">
                <NavLink to={"/anime/" + props.anime.mal_id}>

                <div className='imageAnime'>
                    <img onClick={AfficherSynopis} src={props.anime.images.jpg.image_url} alt="image Animé" />
                
                </div>
                <div className='titre'>
                    <h2>{props.anime.title}</h2>
                </div>
                
                </NavLink>
            </li>
            </animated.div>
        </div>
    );
};

export default Anime;