import React from 'react';
import Slider from 'react-slick';


const Carrousel = (props) => {
    console.log(props.data.images.jpg.image_url)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slideToScroll: 1
    };


    return (
        <div className='Carrousel'>
            <Slider {...settings}>
                <div>
                <img src={props.data.images.jpg.image_url} alt="Carrousel1" />
                </div>
                <div>
                <img src={props.data.images.jpg.image_url} alt="Carrousel2" />
                </div>
                <div>
                <img src={props.data.images.jpg.image_url} alt="Carrousel3" />
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;