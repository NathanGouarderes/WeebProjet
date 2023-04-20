import React from 'react';

const DetailAnime = (props) => {
    console.log(props.anime.title)
    return (
        <div>
            <img src={props.anime.images.jpg.image_url} alt="" />
            <p>{props.anime.synopsis}</p>
        </div>
    );
};

export default DetailAnime;