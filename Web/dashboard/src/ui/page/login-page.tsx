/**
    navbar
    side bar
    logo
    welcome
    loginForm
    footer
*/
import React, { useState } from 'react';
import './login-page.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBarComp from '../components/login-comp/NavbarComp/navbar-comp';
import SideBarComp from '../components/login-comp/SideBarComp/sidebar-comp';
import './login-page.scss';
import FooterComp from '../components/login-comp/FooterComp/footer-comp';
import MainDashBoardComp from '../components/login-comp/MainDashBoardComp/main-dashboard-comp';
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
            <MainDashBoardComp />
            <FooterComp />
        </>
    );
}
export default LoginPage;