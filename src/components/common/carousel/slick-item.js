import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const SlickItemProduct = ({ props }) => {
    const history = useHistory()
    const handleClick = id => {
        history.push(`/detail-page/${id}`)
    }
    return (
        <Card className='slick-items'>
            <img onClick={() => handleClick(props.id)} className='slick-images' src={props.url} />
            <p className='text-center'>{props.name}</p>
        </Card >
    );
};

export default SlickItemProduct;