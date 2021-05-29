import React from 'react';
import { Card } from 'antd';
import { useHistory } from 'react-router-dom';
const { Meta } = Card
const SlickItemProduct = ({ props }) => {
    const history = useHistory()
    const handleClick = id => {
        history.push(`/detail-page/${id}`)
    }
    return (
        <Card className='slick-items'
            hoverable
            cover={<img src={props.url[0]} />}
            onClick={() => handleClick(props._id)} >
            <Meta title={props.name} />
        </Card >
    );
};

export default SlickItemProduct;