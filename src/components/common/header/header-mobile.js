import React from 'react';
import { AppBar, Toolbar, InputBase, IconButton } from '@material-ui/core';
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search'
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: '#000',
        position: '-webkit-sticky',
        position: 'sticky',
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%"
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%"
    },
    btn: {
        display: "flex"
    }
}));
const HeaderMobile = ({ props }) => {
    const classes = useStyles()
    const history = useHistory()
    const handleGoto = (page) => {
        history.push(`/${page}`)
    }
    return (
        <AppBar className={classes.appbar}>
            <Toolbar>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}
                        inputProps={{ "aria-label": "search" }}
                    />
                </div>
                <div className={classes.btn}>
                    <IconButton onClick={() => handleGoto('')} aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <ChatBubbleOutlineOutlinedIcon />
                        </Badge>
                    </IconButton>
                    <IconButton onClick={() => handleGoto('cart')} aria-label="show 1 new notifications" color="inherit">
                        <Badge badgeContent={props} color="secondary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderMobile;