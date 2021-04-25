import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { HistoryOutlined } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        zIndex: '999',
        bottom: '0',
        width: '100%'
    },
    sectionMobile: {
        display: "unset",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
        }
    }
}))
const Navigation = () => {
    const [active, setActive] = useState(0);
    const classes = useStyles()
    const history = useHistory()

    const handleGoto = (page) => {
        history.push(`/${page}`)
    }
    return (
        <>
            <div className={classes.sectionMobile}>
                <BottomNavigation className={classes.root}
                    value={active}
                    onChange={(event, newActive) => { setActive(newActive); }}
                    showLabels>
                    <BottomNavigationAction onClick={() => handleGoto('')} label="Home" icon={<HomeRoundedIcon />} />
                    <BottomNavigationAction onClick={() => handleGoto('')} label="Category" icon={<CategoryRoundedIcon />} />
                    <BottomNavigationAction onClick={() => handleGoto('login')} label="Personal" icon={<PeopleAltRoundedIcon />} />
                </BottomNavigation>
            </div>
            <div className={classes.sectionDesktop}></div>
        </>
    );
};

export default Navigation