import { AppBar, Button, ButtonBase, Card, Grid, Input, InputBase, makeStyles, Paper, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
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
        margin: 'auto',
        maxWidth: 500,
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
        width: '90%'
    },
    totalPrice: {
        justifyContent: 'space-between',
        padding: '2px 20px'
    }
}))
const CartPage = () => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid className={classes.wrap} container spacing={1} direction='row'>
                        <Grid item xs={4}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} src="https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/500x/8ts21s023-sk010-l-1-.jpg" />
                            </ButtonBase>
                        </Grid>
                        <Grid className={classes.info} item xs={8} sm container>
                            <Grid item xs container direction='column' spacing={1}>
                                <Grid item xs>
                                    <Typography gutterBottom variant='h6'>T-Shirt</Typography>
                                    <Typography variant='body1'>500 000 đ</Typography>
                                </Grid>
                                <Grid className={classes.quantity} item xs container direction='row'>
                                    <Grid item><ButtonBase className={classes.btn}><RemoveIcon className={classes.icon} /></ButtonBase></Grid>
                                    <Grid item><input type='text' defaultValue='1' className={classes.inputText} /></Grid>
                                    <Grid item><ButtonBase className={classes.btn}><AddIcon className={classes.icon} /></ButtonBase></Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant='subtitle1'><ButtonBase><BackspaceOutlinedIcon /></ButtonBase></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>

            <div style={{ height: '420px' }}></div>

            <div className={classes.checkout}>
                <Paper className={classes.bottom}>
                    <Grid className={classes.totalPrice} container direction='row'>
                        <Typography item variant='body2'>Thành tiền</Typography>
                        <Typography item variant='body1'>500 000 đ</Typography>
                    </Grid>
                    <Button className={classes.checkoutBtn} variant="contained" color="secondary">Secondary</Button>
                </Paper>
            </div>
        </div>
    );
};

export default CartPage;