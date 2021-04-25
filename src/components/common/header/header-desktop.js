import { Badge, IconButton, makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react';
import { useHistory } from 'react-router-dom';
const useStyle = makeStyles(() => ({
    root: {
        width: '100%',
        color: '#fff'
    },
    header: {
        height: "150px",
        backgroundImage: `url("https://github.com/Tranba1999/webbanquanao/blob/2a724d3976ab770da060bf3acb9aa59423029240/header-image.jpg?raw=true")`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    shopName: {
        textAlign: 'center',
        lineHeight: '150px',
        fontSize: '70px',
        color: '#b0d2ea',
    },
    nav: {
        height: `50px`,
        backgroundColor: '#b0d2ea',
        width: '100%',
        display: 'flex',
        flexFlow: 'row-reverse',
        justifyContent: 'space-between'
    },
    subNavR: {
        display: 'flex',
        flexFlow: 'row-reverse',
        alignItems: 'center',
        marginRight: '15px'
    },
    subNavL: {
        display: 'flex',
        flexFlow: 'row-reverse',
        alignItems: 'center',
        marginLeft: '15px'
    },
    iconSubNav: {
        padding: '15px',
    },
    mid: {
    }

}))
const HeaderDesktop = ({ props }) => {
    const classes = useStyle()
    const history = useHistory()
    const handleGoto = (page) => {
        history.push(`/${page}`)
    }
    return (
        <div className={classes.root}>
            <div className={classes.header} id='header-top'>
                <a href='/'><h1 className={classes.shopName}>Shop TTB</h1></a>
            </div>
            <div className={classes.nav}>
                <div className={classes.subNavR}>
                    <IconButton onClick={() => handleGoto('login')} color="inherit">
                        <AccountCircleIcon />
                    </IconButton>
                    <IconButton onClick={() => handleGoto('cart')} aria-label="show new notifications" color="inherit">
                        <Badge badgeContent={props} color="secondary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </IconButton>
                </div>
                <div>
                    <div className={classes.mid}></div>
                </div>
                <div className={classes.subNavL}>
                    <div className={classes.iconSubNav}>Đồ thể thao</div>
                    <div className={classes.iconSubNav}>Đồ công sở</div>
                    <div className={classes.iconSubNav}>Đồ Dự tiệc</div>
                    <div className={classes.iconSubNav}>Đồ đi biển</div>
                </div>
            </div>
        </div>
    );
};

export default HeaderDesktop;