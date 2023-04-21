import React from 'react';

const DetailAnime = (props) => {
    console.log(props.anime)
    return (
        <div className="Aled">
            <img className='imageDetailsAnime' src={props.anime.images.jpg.image_url} alt="" />
            <div className='DetailsAnime'>
            <h1 className='titreDetailsAnime'>{props.anime.title}</h1>
            <p className='synopsisDetailsAnime'>{props.anime.synopsis}</p>
            <p className='scoreDetailsAnime'>Note : {props.anime.score}</p>
            <p className='episodesDetailsAnime'>Episodes : {props.anime.episodes}</p>
            <p className='DetailsAnime'>Durée : {props.anime.duration}</p>
            <p>Année de sortie : {props.anime.year}</p>
            </div>

        </div>
    );
};

export default DetailAnime;


