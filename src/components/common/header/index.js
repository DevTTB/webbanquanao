import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from 'react-redux';
import HeaderMobile from './header-mobile';
import HeaderDesktop from './header-desktop';

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
const Header = () => {
    const classes = useStyles()
    const quantityItemInCart = useSelector(state => state.cart).length

    return (
        <>
            <div className={classes.sectionMobile}>
                <HeaderMobile props={quantityItemInCart} />
            </div>
            <div className={classes.sectionDesktop}>
                <HeaderDesktop props={quantityItemInCart} />
            </div>
        </>
    );
};

export default Header;