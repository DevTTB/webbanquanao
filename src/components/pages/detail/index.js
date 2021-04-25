import { Button, Container, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addItemToCart } from '../../../redux/slice/cart-slice';
import SlickCarousel from '../../common/carousel/slick-carousel';
import Footer from '../../common/footer/index';
import Header from '../../common/header/index';
const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#00ACC1',
        color: "#fff"
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
            padding: '10px 0',
            justifyContent: 'center'
        }
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    formControl: {
        minWidth: 120,
    },
}))
const DetailPage = () => {
    const id = useParams().id
    const [isAddItem, setIsAddItem] = useState(true)
    const dispatch = useDispatch()
    const classes = useStyles()
    const products = useSelector(state => state.product.data)

    const currentProduct = products.find(item => item.id == id && item)

    const handleAddToCart = (product) => {
        const data = {
            id: product.id,
            name: product.name,
            price: Number(product.price),
            url: product.url,
            quantity: 1,
            category: product.category,
            size: product.size || [],
            color: product.color || [],
            decscription: product.decscription,
            brand: product.brand,
        }
        dispatch(addItemToCart(data))
        setIsAddItem(false)
    }

    return (
        <>
            <Header />
            <Grid container className={classes.sectionMobile}>
                <Grid >
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
            <Container container className={classes.sectionDesktop} maxWidth='lg' >
                <Paper className='view-image'>
                    <Grid >
                        <img className='slick-images' src={currentProduct.url} />
                    </Grid>
                    <Grid className='view-image-list'>
                        <div><img style={{ height: '100px', width: '70px', margin: '10px', cursor: 'pointer' }} src='https://img.ltwebstatic.com/images3_pi/2021/04/15/1618469566027838ada4cb290a26fa77517fef1804_thumbnail_600x.webp' /></div>
                        <div><img style={{ height: '100px', width: '70px', margin: '10px', cursor: 'pointer' }} src='https://img.ltwebstatic.com/images3_pi/2021/04/15/16184695809da53f8d6e726ae09e08fd378841dea5_thumbnail_600x.webp' /></div>
                        <div><img style={{ height: '100px', width: '70px', margin: '10px', cursor: 'pointer' }} src='https://img.ltwebstatic.com/images3_pi/2021/04/15/1618469599df2d953b2634bad48fb82f888c218253_thumbnail_600x.webp' /></div>
                    </Grid>
                </Paper>
                <Grid className='info-cart'>
                    <Grid>
                        <Typography variant='h6'>{currentProduct.name}</Typography>
                        <br />
                        <br />
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Size:</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Age"
                            >
                                <MenuItem value={0}>S</MenuItem>
                                <MenuItem value={10}>M</MenuItem>
                                <MenuItem value={20}>L</MenuItem>
                                <MenuItem value={30}>XL</MenuItem>
                            </Select>
                        </FormControl>
                        <br />
                        <br />
                        <Typography variant='h5'>{currentProduct.price} đ</Typography>
                        <br />
                    </Grid>
                    <Grid>
                        {
                            isAddItem ? <Button
                                variant="contained"
                                className={classes.button}
                                startIcon={<AddShoppingCartRoundedIcon />}
                                onClick={() => handleAddToCart(currentProduct)}>THÊM VÀO GIỎ HÀNG</Button>
                                : <Button
                                    variant="contained"
                                    className={classes.button}
                                    startIcon={<AddShoppingCartRoundedIcon />}>ĐÃ THÊM VÀO GIỎ HÀNG</Button>
                        }
                    </Grid>
                </Grid>
            </Container>
            <SlickCarousel props={products} titleSlick='Sản phẩm liên quan' />
            <Footer />
        </>
    );
};

export default DetailPage;