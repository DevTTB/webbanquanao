import { Button, Container, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import React, {useEffect, useState} from 'react';
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
    const [url, setUrl] = useState()
    const [size, setSize] = useState()
    const [color, setColor] = useState()

    const dispatch = useDispatch()
    const classes = useStyles()
    const products = useSelector(state => state.product.data)

    const currentProduct = products.find(item => item._id == id && item)

    useEffect(() => {
        setUrl(currentProduct.url[0])
    },[currentProduct.url])

    const handleAddToCart = (product) => {
        const data = {
            productId: product._id,
            name: product.name,
            price: Number(product.price),
            url: product.url[0],
            quantity: 1,
            category: product.category,
            size: size || 'S',
            color: color || 'black',
            sale: product.sale || 0,
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
                        <img className='slick-images' src={url || currentProduct.url[0]} />
                    </Grid>
                    <Grid className='view-image-list'>
                        {
                            currentProduct.url.map(item =>
                                <div onMouseEnter={() => setUrl(item)}>
                                    <img  style={{ height: '100px', width: '70px', margin: '10px', cursor: 'pointer' }}
                                          src={item} />
                                </div>)
                        }
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
                                onChange={(e) => setSize(e.target.value)}
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Age" >
                                {
                                    currentProduct.size.map(item => <MenuItem value={item}>{item}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                        <br />
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Color:</InputLabel>
                            <Select
                                onChange={(e) => setColor(e.target.value)}
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Age" >
                                {
                                    currentProduct.color.map(item => <MenuItem value={item}>{item}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                        <br />
                        <Typography variant='h5'>{currentProduct.price} đ</Typography>
                        <br />
                    </Grid>
                    <Grid>
                        {
                            isAddItem
                                ? <Button
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