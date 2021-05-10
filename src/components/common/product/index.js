import React from 'react';
import { useHistory } from 'react-router';
import { Card, Col } from 'antd'

const { Meta } = Card
const ProductCard = ({ props }) => {
    const history = useHistory()
    const handleGoDetail = (id) => {
        history.push(`/detail-page/${id}`)
    }
    return (
        <Col md={6} xs={12} sm={8}>
            <Card className=''
                hoverable
                onClick={() => handleGoDetail(props.id)}
                cover={<img alt="example" src={props.url} />} >
                <Meta title={props.name} />
            </Card>
        </Col>
    );
};

export default ProductCard;