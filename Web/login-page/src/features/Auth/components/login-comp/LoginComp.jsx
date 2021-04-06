import React from 'react'
import FooterLoginComp from './FooterComp/footer-comp'
import FullSideBarComp from './FullSideBarComp/FullSideBarComp'
import './LoginComp.scss'
import MainLoginComp from './MainLogin/main-login-comp'
import NavBarComp from './NavbarComp/navbar-comp'
import NavSmallDeviceComp from './NavSmallDeviceComp/NavSmallDeviceComp'
import SideBarComp from './SideBarComp/sidebar-comp'
const LoginComp = props => {
    return (
        <div className="login-page">
            <NavBarComp />
            <SideBarComp />
            <FullSideBarComp />
            <NavSmallDeviceComp />
            <MainLoginComp />
            <FooterLoginComp />
        </div>
    )
}

LoginComp.propTypes = {

}

export default LoginComp
