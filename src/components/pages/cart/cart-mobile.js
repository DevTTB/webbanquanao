import { AppBar, Button, ButtonBase, Card, Grid, Input, InputBase, Link, makeStyles, Paper, Toolbar, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity, removeItemToCart } from '../../../redux/slice/cart-slice';
import { useHistory } from 'react-router';
import subTotal from '../../common/total-price/subtotal';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '55px',
        marginBottom: '90px',
        flexGrow: 1,
        padding: '4px 0'
    },
    bottom: {
        padding: '15px 0',
        justifyContent: 'space-between',
    },
    checkout: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
    },
    paper: {
        padding: 'auto',
        margin: '5px 0',
        minWidth: 350,
    },
    wrap: {
        width: '100% !important',
        margin: '0 !important'
    },
    info: {
        textAlign: 'left'
    },
    image: {
        margin: 'auto',
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    quantity: {
    },
    inputText: {
        padding: '0',
        textAlign: 'center',
        width: '42px',
        lineHeight: '24px',
        border: 'none',
        marginRight: '4px'
    },
    btn: {
        display: 'inline-block',
        paddingTop: '2px',
        background: 'rgb(242, 242, 242)',
        position: 'relative',
        width: '24px',
        height: '24px',
        border: 'none',
        outline: 'none',
        marginRight: '4px'
    },
    icon: {
        fontSize: '15px',
    },
    checkoutBtn: {
        width: '100%'
    },
    totalPrice: {
        justifyContent: 'space-between',
        padding: '2px 20px'
    }
}))


const CartMobile = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const cartList = useSelector(state => state.cart)
    const handleGoBack = () => {
        history.push('/')
    }
    const handleRemoveItemCart = (id) => {
        const item = {
            id: id
        }
        const action = removeItemToCart(item)
        dispatch(action)
    }
    const handleIncreaseItemCart = (id) => {
        const item = {
            id: id
        }
        const action = increaseItemQuantity(item)
        dispatch(action)
    }
    const handleDecreaseItemCart = (id) => {
        const item = {
            id: id
        }
        const action = decreaseItemQuantity(item)
        dispatch(action)
    }
    return (
        <>
            <div>
                <AppBar>
                    <Toolbar>
                        <ButtonBase onClick={() => handleGoBack()}><ArrowBackIosRoundedIcon /></ButtonBase>
                    </Toolbar>
                </AppBar>
            </div>
            <div className={classes.root}>
                {
                    !cartList.length
                        ? <div><Typography variant="h1">Empty Cart</Typography></div>
                        : cartList.map(item =>
                            <Paper className={classes.paper}>
                                <Grid className={classes.wrap} container spacing={1} direction='row'>
                                    <Grid item xs={4}>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} src={item.url} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid className={classes.info} item xs={8} sm container>
                                        <Grid item xs container direction='column' spacing={1}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant='h6'>{item.name}</Typography>
                                                <Typography variant='body1'>{item.price} đ</Typography>
                                            </Grid>
                                            <Grid className={classes.quantity} item xs container direction='row'>
                                                <Grid item><ButtonBase className={classes.btn} onClick={() => handleDecreaseItemCart(item.id)}><RemoveIcon className={classes.icon} /></ButtonBase></Grid>
                                                <Grid item><label>{item.quantity}</label> </Grid>
                                                <Grid item><ButtonBase className={classes.btn} onClick={() => handleIncreaseItemCart(item.id)}><AddIcon className={classes.icon} /></ButtonBase></Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography variant='subtitle1'><ButtonBase onClick={() => handleRemoveItemCart(item.id)}><BackspaceOutlinedIcon /></ButtonBase></Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>)
                }
            </div>
            <div className={classes.checkout}>
                <Paper className={classes.bottom}>
                    <Grid className={classes.totalPrice} container direction='row'>
                        <Typography item variant='body2'>Thành tiền</Typography>
                        <Typography item variant='body1'>{subTotal(cartList)} đ</Typography>
                    </Grid>
                    <Button className={classes.checkoutBtn} variant="contained" color="secondary">Secondary</Button>
                </Paper>
            </div>
        </>
    );
};

export default CartMobile;