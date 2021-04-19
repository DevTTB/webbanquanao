import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import React, { useEffect, useState } from 'react';
import Zoom from 'react-img-zoom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Footer from '../../organisms/footer';
import Header from '../../organisms/header';
import ReactImageZoom from 'react-image-zoom';
import { addItemToCart } from '../../../redux/slice/cart-slice';
const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#00ACC1',
        color: "#fff"
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }
}))
const DetailPage = () => {
    const id = useParams().id
    const dispatch = useDispatch()
    const classes = useStyles()
    const products = useSelector(state => state.product.data)

    const currentProduct = products.find(item => item.id == id && item)
    const [image, setImage] = useState('https://aristino.com/Data/ResizeImage/images/product/ao-tshirt/ats028s1/ao-thun-nam-aristino-ATS028S1-10x500x500x4.jpg')

    const handleClick = (url) => {
        setImage(url)
    }

    const handleAddToCart = (product) => {
        dispatch(addItemToCart(product))
    }
    const props = { width: 450, height: 400, zoomWidth: 200, zoomHeight: 100, img: `${image}` };

    return (
        <>
            <Header />
            <Grid container className={classes.sectionMobile}>
                <Grid >
                    <img src={image} />
                </Grid>
                <Grid>
                    <Typography>Mobile</Typography>
                    <Typography variant='h6'>{currentProduct.name}</Typography>
                    <Typography variant='body1'>{currentProduct.price}</Typography>
                </Grid>
                <Grid>
                    <Button
                        variant="contained"
                        className={classes.button}
                        startIcon={<AddShoppingCartRoundedIcon />}
                        onClick={() => handleAddToCart(currentProduct)}>Add To Cart</Button>
                </Grid>
            </Grid>
            <Grid container className={classes.sectionDesktop}>
                <Grid >
                    <ReactImageZoom {...props} />
                </Grid>
                <Grid>
                    <div onClick={() => handleClick('https://aristino.com/Data/ResizeImage/images/product/ao-tshirt/ats028s1/ao-thun-nam-aristino-ATS028S1-10x500x500x4.jpg')}><img style={{ height: '100px', width: '70px', margin: '10px', cursor: 'pointer' }} src={currentProduct.url} /></div>
                    <div onClick={() => handleClick('https://aristino.com/Data/ResizeImage/images/product/ao-tshirt/ats007s1/ao-thun-nam-aristino-ATS007S1-02x500x500x4.jpg')}><img style={{ height: '100px', width: '70px', margin: '10px', cursor: 'pointer' }} src={currentProduct.url} /></div>
                    <div onClick={() => handleClick('https://aristino.com/Data/ResizeImage/images/product/ao-tshirt/ats019s1/ao-thun-nam-aristino-ATS019S1-07x500x500x4.jpg')}><img style={{ height: '100px', width: '70px', margin: '10px', cursor: 'pointer' }} src={currentProduct.url} /></div>
                </Grid>
                <Grid>
                    <Typography>desktop</Typography>
                    <Typography variant='h6'>{currentProduct.name}</Typography>
                    <Typography variant='body1'>{currentProduct.price}</Typography>
                </Grid>
                <Grid>
                    <Button
                        variant="contained"
                        // color="secondary"
                        className={classes.button}
                        startIcon={<AddShoppingCartRoundedIcon />}
                        onClick={() => handleAddToCart(currentProduct)}>Add To Cart</Button>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default DetailPage;