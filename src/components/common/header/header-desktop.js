import { Badge, IconButton, makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase'
import { useAuth } from '../../../config/contexts/auth-context';
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
    const currentUser = useAuth() || ''
    const userName = currentUser.currentUser.displayName
    return (
        <div className={classes.root}>
            <div className={classes.header} id='header-top'>
                <a href='/'><h1 className={classes.shopName}>Shop TTB</h1></a>
            </div>
            <div className={classes.nav}>
                <div className={classes.subNavR}>
                    {currentUser.name}
                    <IconButton onClick={() => userName !== null ? handleGoto('login') : handleGoto('account')} color="inherit">
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
                    <Button variant='text' className={classes.iconSubNav}>Đồ thể thao</Button>
                    <Button variant='text' className={classes.iconSubNav}>Đồ công sở</Button>
                    <Button variant='text' className={classes.iconSubNav}>Đồ Dự tiệc</Button>
                    <Button variant='text' className={classes.iconSubNav}>Đồ đi biển</Button>
                </div>
            </div>
        </div>
    );
};

export default HeaderDesktop;