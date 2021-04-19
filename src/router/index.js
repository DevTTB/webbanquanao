import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import CartPage from '../components/pages/cart';
import DetailPage from '../components/pages/detail';
import HomePage from '../components/pages/home';


const Routers = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/cart' component={CartPage} />
                <Route exact path='/detail-page/:id' component={DetailPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routers;