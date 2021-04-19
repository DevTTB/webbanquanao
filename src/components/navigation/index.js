import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import React, { useState } from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
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
const handleBtn = (a) => {
    console.log(a)
}
const Navigation = () => {
    const [active, setActive] = useState(0);
    const classes = useStyles()
    return (
        <>
            <div className={classes.sectionMobile}>
                <BottomNavigation className={classes.root}
                    value={active}
                    onChange={(event, newActive) => { setActive(newActive); }}
                    showLabels>
                    <BottomNavigationAction onClick={() => handleBtn(1)} label="Home" icon={<HomeRoundedIcon />} />
                    <BottomNavigationAction onClick={() => handleBtn(2)} label="Category" icon={<CategoryRoundedIcon />} />
                    <BottomNavigationAction onClick={() => handleBtn(3)} label="Personal" icon={<PeopleAltRoundedIcon />} />
                </BottomNavigation>
            </div>
            <div className={classes.sectionDesktop}></div>
        </>
    );
};

export default Navigation