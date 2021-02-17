import React from "react";
import "./NavSmallDeviceComp.scss";
import { Icon } from "@iconify/react";
import news28Regular from "@iconify-icons/fluent/news-28-regular";
import usersBold from "@iconify-icons/ph/users-bold";
import userOutlined from "@iconify-icons/ant-design/user-outlined";
import bellIcon from "@iconify-icons/cil/bell";
import logoAppleAppstore from "@iconify-icons/ion/logo-apple-appstore";
import googleplayIcon from "@iconify-icons/simple-icons/googleplay";
import unorderedListOutlined from "@iconify-icons/ant-design/unordered-list-outlined";
import stickyNote from "@iconify-icons/vs/sticky-note";
import arrowLeft from "@iconify-icons/bi/arrow-left";
const NavSmallDeviceComp = () => {
  return (
    <>
      <div className="overlay"></div>
      <section id="nav-widget-small-device" className="appear disappear">
        <div className="close-arrow-button">
          <button>
            <Icon icon={arrowLeft} className="arrow-left-icon" />
          </button>
        </div>
        <div className="login-btn">
          <button>Login</button>
        </div>

        <div id="section">
          <div className="section-title">Section</div>
          <ul className="menu-sidebar">
            <li className="menu-item">
              <span className="menu-item-link box-shadow-hover">
                <Icon icon={news28Regular} className="menu-item-icon" />
                Posts
              </span>
            </li>
            <li className="menu-item">
              <span className="menu-item-link box-shadow-hover">
                <Icon icon={usersBold} className="menu-item-icon" />
                Staffs
              </span>
            </li>
            <li className="menu-item">
              <span className="menu-item-link box-shadow-hover">
                <Icon icon={userOutlined} className="menu-item-icon" />
                Profile
              </span>
            </li>
            <li className="menu-item">
              <span className="menu-item-link box-shadow-hover">
                <Icon icon={bellIcon} className="menu-item-icon" />
                Notifications
              </span>
            </li>
            <li className="menu-item">
              <span className="menu-item-link box-shadow-hover">
                <Icon icon={logoAppleAppstore} className="menu-item-icon" />
                Download on App Store
              </span>
            </li>
            <li className="menu-item">
              <span className="menu-item-link box-shadow-hover">
                <Icon icon={googleplayIcon} className="menu-item-icon" />
                Download on Google Play
              </span>
            </li>
            <li className="menu-item">
              <span className="menu-item-link box-shadow-hover">
                <Icon icon={unorderedListOutlined} className="menu-item-icon" />
                Products
              </span>
            </li>
            <li className="menu-item">
              <span className="menu-item-link box-shadow-hover">
                <Icon icon={stickyNote} className="menu-item-icon" />
                Blog
              </span>
            </li>
          </ul>
        </div>

        <div id="section">
          <div className="section-title">Main Links</div>
          <ul className="menu-sidebar">
            <li className="menu-item">
              <span className="menu-item-link color-hover">Home</span>
            </li>
            <li className="menu-item">
              <span className="menu-item-link color-hover">More</span>
              <ul className="menu-sidebar-child">
                <li className="menu-item">
                  <span className="menu-item-link color-hover">
                    Other Items
                  </span>
                </li>
                <li className="menu-item">
                  <span className="menu-item-link color-hover">
                    Our websites
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div id="section" style={{ marginTop: "6rem" }}>
          <div className="section-title">Download</div>
          <ul className="menu-sidebar">
            <li className="menu-item">
              <span className="menu-item-link color-hover">App Store</span>
            </li>
            <li className="menu-item">
              <span className="menu-item-link color-hover">Google Play</span>
            </li>
          </ul>
        </div>
        <div id="section">
          <div className="section-title">Users</div>
          <ul className="menu-sidebar">
            <li className="menu-item">
              <span className="menu-item-link color-hover">Profile</span>
            </li>
            <li className="menu-item">
              <span className="menu-item-link color-hover">Staffs</span>
            </li>
            <li className="menu-item">
              <span className="menu-item-link color-hover">Clients</span>
            </li>
            <li className="menu-item">
              <span className="menu-item-link color-hover">Admin</span>
            </li>
          </ul>
        </div>

        <div id="section">
          <div className="section-title">Pages</div>
          <ul className="menu-sidebar">
            <li className="menu-item">
              <span className="menu-item-link color-hover">Client</span>
            </li>
            <li className="menu-item">
              <span className="menu-item-link color-hover">
                Admin dashboard
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NavSmallDeviceComp;
