import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import AccountPage from '../components/pages/account';
import AdminPage from '../components/pages/account/admin/admin';
import ForgotPassword from '../components/pages/account/reset-password';
import UpdateProfile from '../components/pages/account/update-profile';
import UserPage from '../components/pages/account/user';
import CartPage from '../components/pages/cart';
import CheckoutPage from '../components/pages/checkout';
import DetailPage from '../components/pages/detail';
import HomePage from '../components/pages/home';
import LoginPage from '../components/pages/login';
import PaymentPage from '../components/pages/payment';
import SignupPage from '../components/pages/signup';
import { AuthProvider } from '../config/contexts/auth-context';
import PrivateRoute from './private-route';
import SearchPage from "../components/pages/search";

const Routers = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    {/*<PrivateRoute exact path='/' component={HomePage} />*/}
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/cart' component={CartPage} />
                    <Route exact path='/detail-page/:id' component={DetailPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route exact path='/login' component={LoginPage} />
                    <Route exact path='/signup' component={SignupPage} />
                    <Route exact path='/user' component={UserPage} />
                    <Route exact path='/admin' component={AdminPage} />
                    <Route exact path='/account' component={AccountPage} />
                    <Route exact path='/forgot-password' component={ForgotPassword} />
                    <Route exact path='/update-profile' component={UpdateProfile} />
                    <Route exact path='/payment' component={PaymentPage} />
                    <Route exact path='/search' component={SearchPage} />
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default Routers;
