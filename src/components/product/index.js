import { Card, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';
import React from 'react';

const ProductCard = ({ props }) => {
    return (
        <Grid item key={props} xs={6} sm={3} md={3}>
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