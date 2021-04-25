import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import SlickItemProduct from './slick-item';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const settingSlickre = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: <PreArrow />,
    nextArrow: <NextArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}
function PreArrow(props) {
    const { className, onClick } = props
    return (
        <svg className={className} style={{ height: 26, filter: 'invert(1)', fill: '#fff', transform: 'rotate(180deg)', marginTop: '-10px' }} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
    )
}

function NextArrow(props) {
    const { className, onClick } = props
    return (
        <svg className={className} style={{ height: 26, filter: 'invert(1)', fill: '#fff', color: '#000' }} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
    )
}
const SlickCarousel = ({ props, titleSlick }) => {
    return (
        <Container className='mw-100 p-4' >
            <h3>{titleSlick}</h3>
            <div className='sale-carousel'>
                <Slider {...settingSlickre}>
                    {props.map(item => item.id <= 8 && (
                        <SlickItemProduct props={item} />
                    ))}
                </Slider>
            </div>
        </Container>
    );
};

export default SlickCarousel;