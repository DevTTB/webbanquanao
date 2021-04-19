import { Card, CardContent, CardMedia, Typography, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
const useStyles = makeStyles(() => ({
    root: {
    }
}))
const ProductCard = ({ props }) => {
    const history = useHistory()
    const handleGoDetail = (id) => {
        history.push(`/detail-page/${id}`)
    }
    const classes = useStyles()
    return (
        <Grid className='block-hover' onClick={() => handleGoDetail(props.id)} item key={props} xs={6} sm={3} md={3}>
            <Card>
                <CardMedia
                    component='img'
                    image={props.url}
                />
                <CardContent>
                    <Typography variant="body1">
                        {props.name}
                    </Typography>
                    <span>{props.price}đ</span>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ProductCard;