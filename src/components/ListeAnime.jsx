import React, { useEffect, useState } from 'react';
import Anime from './Anime';
import axios from 'axios';

const ListeAnime = () => {
    const [anime, setAnime] = useState([]);
    const [genreFilter, setGenreFilter] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await axios.get("../../WEEBapi.txt");
                if (isMounted) {
                    setAnime(response.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        setTimeout(() => {
            fetchData();
        }, 1000);

        return () => {
            isMounted = false;
        };
    }, []);

    const handleGenreFilterChange = (event) => {
        setGenreFilter(event.target.value);
    };

    return (
        <div>
            {/* {anime.map((anime, index) => (
                <Carrousel key={index} data={anime} />
            )) } */}

            <h1>Action</h1>
            <ul className='tousLesAnimes'>
            {anime.filter(anime => anime.genres.some(genre => genre.name === "Action"))
                .map((anime, index) => (
                <Anime key={index} anime={anime} />
                ))}
            </ul>

            <h1>Sci-Fi</h1>
            <ul className='tousLesAnimes'>
            {anime.filter(anime => anime.genres.some(genre => genre.name === "Sci-Fi"))
                .map((anime, index) => (
                <Anime key={index} anime={anime} />
                ))}
            </ul>

            <h1>Aventure</h1>
            <ul className='tousLesAnimes'>
            {anime.filter(anime => anime.genres.some(genre => genre.name === "Adventure"))
                .map((anime, index) => (
                <Anime key={index} anime={anime} />
                ))}
            </ul>

            <h1>Drame</h1>
            <ul className='tousLesAnimes'>
            {anime.filter(anime => anime.genres.some(genre => genre.name === "Drama"))
                .map((anime, index) => (
                <Anime key={index} anime={anime} />
                ))}
            </ul>

            <h1>Surnaturel</h1>
            <ul className='tousLesAnimes'>
            {anime.filter(anime => anime.genres.some(genre => genre.name === "Supernatural"))
                .map((anime, index) => (
                <Anime key={index} anime={anime} />
                ))}
            </ul>

            <h1>Award Winning</h1>
            <ul className='tousLesAnimes'>
            {anime.filter(anime => anime.genres.some(genre => genre.name === "Award Winning"))
                .map((anime, index) => (
                <Anime key={index} anime={anime} />
                ))}
            </ul>

            <h1>Suspense</h1>
            <ul className='tousLesAnimes'>
            {anime.filter(anime => anime.genres.some(genre => genre.name === "Suspense"))
                .map((anime, index) => (
                <Anime key={index} anime={anime} />
                ))}
            </ul>

            <h1>Avant Gardiste</h1>
            <ul className='tousLesAnimes'>
            {anime.filter(anime => anime.genres.some(genre => genre.name === "Avant Garde"))
                .map((anime, index) => (
                <Anime key={index} anime={anime} />
                ))}
            </ul>

            <h1>Fantasy</h1>
            <ul className='tousLesAnimes'>
            {anime.filter(anime => anime.genres.some(genre => genre.name === "Fantasy"))
                .map((anime, index) => (
                <Anime key={index} anime={anime} />
                ))}
            </ul>

            <h1>Horror</h1>
            <ul className='tousLesAnimes'>
            {anime.filter(anime => anime.genres.some(genre => genre.name === "Horror"))
                .map((anime, index) => (
                <Anime key={index} anime={anime} />
                ))}
            </ul>

            <h1>Aventure</h1>
            <ul className='tousLesAnimes'>
            {anime.filter(anime => anime.genres.some(genre => genre.name === "Adventure"))
                .map((anime, index) => (
                <Anime key={index} anime={anime} />
                ))}
            </ul>
        </div>
    );
};

export default ListeAnime;