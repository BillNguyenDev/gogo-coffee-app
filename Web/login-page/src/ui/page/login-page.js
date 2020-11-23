/**
    navbar
    side bar
    logo
    welcome
    loginForm
    footer
*/
import React, { useState } from 'react';
import MainLoginComp from '../components/login-comp/MainLogin/main-login-comp';
import './login-page.scss';
import { DashBoardComp } from '../components/login-comp/DashBoard/dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBarComp from '../components/login-comp/NavbarComp/navbar-comp';
import SideBarComp from '../components/login-comp/SideBarComp/sidebar-comp';
import './login-page.scss';
import FooterLoginComp from '../components/login-comp/FooterComp/footer-comp';
const LoginPage = () => {
    return (
        // <Router>
        //     <Switch>
        //         <Route exact path='/'>
        //             <MainLoginComp />
        //         </Route>
        //         <Route exact path='/dashboard'>
        //             <DashBoardComp />
        //         </Route>
        //     </Switch>
        // </Router>
        <>
            <NavBarComp />
            <SideBarComp />
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <MainLoginComp />
                    </Route>
                    <Route exact path='/dashboard'>
                        <DashBoardComp />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
export default LoginPage;