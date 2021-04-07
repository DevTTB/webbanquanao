import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React, { useState } from 'react';
const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: '0',
        width: '100%'
    }
})
const handleBtn = (a) => {
    console.log(a)
}
const Navigation = () => {
    const [active, setActive] = useState(0);
    const classes = useStyles()
    return (
        <BottomNavigation className={classes.root}
            value={active}
            onChange={(event, newActive) => { setActive(newActive); }}
            showLabels>
            <BottomNavigationAction onClick={() => handleBtn(1)} label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction onClick={() => handleBtn(2)} label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction onClick={() => handleBtn(3)} label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
    );
};

export default Navigation