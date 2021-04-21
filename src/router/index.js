import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import AdminPage from '../components/pages/account/admin';
import UserPage from '../components/pages/account/user';
import CartPage from '../components/pages/cart';
import CheckoutPage from '../components/pages/checkout';
import DetailPage from '../components/pages/detail';
import HomePage from '../components/pages/home';
import LoginPage from '../components/pages/login';
import SignupPage from '../components/pages/signup';


const Routers = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/cart' component={CartPage} />
                <Route exact path='/detail-page/:id' component={DetailPage} />
                <Route exact path='/checkout' component={CheckoutPage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/signup' component={SignupPage} />
                <Route exact path='/user' component={UserPage} />
                <Route exact path='/admin' component={AdminPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routers;