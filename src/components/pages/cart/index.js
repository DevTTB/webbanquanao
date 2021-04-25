import { makeStyles } from '@material-ui/core';
import React from 'react';
import CartDesktop from './cart-desktop';
import CartMobile from './cart-mobile'
const useStyles = makeStyles((theme) => ({
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
            width: "100%"
        }
    },
    sectionMobile: {
        width: "100%",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    }
}));
const CartPage = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.sectionMobile}>
                <CartMobile />
            </div>
            <div className={classes.sectionDesktop}>
                <CartDesktop />
            </div>
        </>
    );
};

export default CartPage;