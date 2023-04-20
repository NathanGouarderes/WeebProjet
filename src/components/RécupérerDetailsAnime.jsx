import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailAnime from './DetailAnime';

const RécupérerDetailsAnime = () => {

    const [DetailsAnime, setDetailAnime] = useState([])

    const params = useParams()
    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime/${params.idAnime}`)
          .then((response) => response.json())
          .then((data) => {
            const animeArray = [data.data]; // transformer l'objet en tableau
            setDetailAnime(animeArray);
          });
      }, []);

      console.log(typeof DetailsAnime)

    

    return (
        <div>
            <ul>{DetailsAnime.map((anime, index) => (
                <DetailAnime key={index} anime={anime}/>
            ))}</ul>
        </div>
    );
};

export default RécupérerDetailsAnime;