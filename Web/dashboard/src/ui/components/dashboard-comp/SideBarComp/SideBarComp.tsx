import React from "react";
import "./SideBarComp.scss";
import { Icon } from "@iconify/react";
import shopWindow from "@iconify-icons/bi/shop-window";
import monitorIcon from "@iconify-icons/feather/monitor";
import applicationsIcon from "@iconify-icons/cil/applications";
import pantoneLine from "@iconify-icons/ri/pantone-line";
import tilemenuIcon from "@iconify-icons/ls/tilemenu";
import bxsSmile from "@iconify-icons/bx/bxs-smile";

export const SideBarComp = () => {
  return (
    <>
      <nav id="vertical-sidebar">
        <div className="main-vertical-menu border-radius-toggle">
          <ul className="main-ul">
            <li className="active">
              <Icon icon={shopWindow} className="li-icon" />
              Dashboard
            </li>
            <li>
              <Icon icon={monitorIcon} className="li-icon" />
              Pages
            </li>
            <li>
              <Icon icon={applicationsIcon} className="li-icon" />
              Applications
            </li>
            <li>
              <Icon icon={pantoneLine} className="li-icon" />
              UI
            </li>
            <li>
              <Icon icon={tilemenuIcon} className="li-icon" />
              Menu
            </li>
            <li style={{ borderBottom: "none" }}>
              <Icon icon={bxsSmile} className="li-icon" />
              About
            </li>
          </ul>
        </div>
        <div className="sub-vertical-menu display-none display-show">
          {/* <ul className="sub-ul">
                    <li>Default</li>
                    <li>Analytics</li>
                    <li>Ecommerce</li>
                    <li>Content</li>
                </ul> */}

          {/* <ul className="sub-ul">
                    <li>To-do List</li>
                    <li>Survey</li>
                    <li>Chat</li>
                </ul> */}

          {/* <ul className="sub-ul page-ul">
                    <li><a >Authorization
                        <div className="ul-child-dropdown">
                            <ul className="ul-child">
                                <li>Login</li>
                                <li>Register</li>
                                <li>Forgot Password</li>
                                <li>Reset Password</li>
                            </ul>
                        </div>
                    </li>
                    <li>Product
                        <div className="ul-child-dropdown">
                            <ul className="ul-child">
                                <li>Data List</li>
                                <li>Thumb List</li>
                                <li>Image List</li>
                                <li>Details</li>
                                <li>Details Alt</li>
                            </ul>
                        </div>
                    </li>
                    <li>Profile
                        <div className="ul-child-dropdown">
                            <ul className="ul-child">
                                <li>Social</li>
                                <li>Portfolio</li>
                            </ul>
                        </div>
                    </li>
                    <li>Blog
                        <div className="ul-child-dropdown">
                            <ul className="ul-child">
                                <li>Blog List</li>
                                <li>Blog Detail</li>
                            </ul>
                        </div>
                    </li>
                    <li>Miscellaneous
                        <div className="ul-child-dropdown">
                            <ul className="ul-child">
                                <li>Faq</li>
                                <li>Knowledege Base</li>
                                <li>Prices</li>
                                <li>Search</li>
                                <li>Mailing</li>
                                <li>Invoice</li>
                                <li>Error</li>
                            </ul>
                        </div>
                    </li>
                </ul> */}

          <ul className="sub-ul ul-toggle">
            <li>
              Forms
              <div className="ul-child-dropdown">
                <ul className="ul-child">
                  <li>Layouts</li>
                  <li>Components</li>
                  <li>Validations</li>
                  <li>Wizard</li>
                </ul>
              </div>
            </li>
            <li>
              Components
              <div className="ul-child-dropdown">
                <ul className="ul-child">
                  <li>Alerts</li>
                  <li>Badges</li>
                  <li>Buttons</li>
                  <li>Cards</li>
                  <li>Carousel</li>
                  <li>Charts</li>
                  <li>Collapse</li>
                  <li>Dropdowns</li>
                  <li>Editors</li>
                  <li>Icons</li>
                  <li>Input Groups</li>
                  <li>Jumbotron</li>
                  <li>Maps</li>
                  <li>Modal</li>
                  <li>Navigation</li>
                  <li>Popover & Tooltip</li>
                  <li>Sortable</li>
                  <li>Tables</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
