import MainLoginComp from "../components/login-comp/MainLogin/main-login-comp";
import "./login-page.scss";
// import { DashBoardComp } from "../components/login-comp/DashBoard/dashboard";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBarComp from "../components/login-comp/NavbarComp/navbar-comp";
import SideBarComp from "../components/login-comp/SideBarComp/sidebar-comp";
import "./login-page.scss";
import FooterLoginComp from "../components/login-comp/FooterComp/footer-comp";
import NavSmallDeviceComp from "../components/login-comp/NavSmallDeviceComp/NavSmallDeviceComp";
import FullSideBarComp from "../components/login-comp/FullSideBarComp/FullSideBarComp";
const LoginPage = () => {
  return (
    <>
      <NavBarComp />
      <SideBarComp />
      <FullSideBarComp />
      <NavSmallDeviceComp />
      <MainLoginComp />
      <FooterLoginComp />
    </>
  );
};
export default LoginPage;
