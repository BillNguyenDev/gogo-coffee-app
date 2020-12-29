import MainLoginComp from '../components/login-comp/MainLogin/main-login-comp';
import './login-page.scss';
import { DashBoardComp } from '../components/login-comp/DashBoard/dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBarComp from '../components/login-comp/NavbarComp/navbar-comp';
import SideBarComp from '../components/login-comp/SideBarComp/sidebar-comp';
import './login-page.scss';
import FooterLoginComp from '../components/login-comp/FooterComp/footer-comp';
import NavSmallDeviceComp from '../components/login-comp/NavSmallDeviceComp/NavSmallDeviceComp';
const LoginPage = () => {
    return (
        <>
            <NavBarComp />
            <SideBarComp />
            <NavSmallDeviceComp />
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
            <FooterLoginComp />
        </>
    );
}
export default LoginPage;