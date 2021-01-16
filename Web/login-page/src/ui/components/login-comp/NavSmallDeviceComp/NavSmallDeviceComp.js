import React from 'react'
import './NavSmallDeviceComp.scss';
import { Icon, InlineIcon } from '@iconify/react';
import news28Regular from '@iconify-icons/fluent/news-28-regular';
import usersBold from '@iconify-icons/ph/users-bold';
import userOutlined from '@iconify-icons/ant-design/user-outlined';
import bellIcon from '@iconify-icons/cil/bell';
import logoAppleAppstore from '@iconify-icons/ion/logo-apple-appstore';
import googleplayIcon from '@iconify-icons/simple-icons/googleplay';
import androidIcon from '@iconify-icons/cib/android';
import unorderedListOutlined from '@iconify-icons/ant-design/unordered-list-outlined';
import stickyNote from '@iconify-icons/vs/sticky-note';
import arrowLeft from '@iconify-icons/bi/arrow-left';
const NavSmallDeviceComp = () => {
    return (
        <>
            <div className="overlay"></div>
            <section id="nav-widget-small-device" className="appear disappear">
                <div id="scroller">
                    <div className="close-arrow-button">
                        <button>
                            <Icon icon={arrowLeft} className="arrow-left-icon" />
                        </button>
                    </div>
                    <div className="login-btn">
                        <button>
                            Login
                        </button>
                    </div>

                    <div id="section">
                        <div className="section-title">
                            Section
                        </div>
                        <ul className="menu-sidebar">
                            <li className="menu-item">
                                <a className="menu-item-link box-shadow-hover">
                                    <Icon icon={news28Regular} className="menu-item-icon" />
                                Posts
                            </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-link box-shadow-hover">
                                    <Icon icon={usersBold} className="menu-item-icon" />
                                Staffs
                            </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-link box-shadow-hover">
                                    <Icon icon={userOutlined} className="menu-item-icon" />
                                Profile
                            </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-link box-shadow-hover">
                                    <Icon icon={bellIcon} className="menu-item-icon" />
                                Notifications
                            </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-link box-shadow-hover">
                                    <Icon icon={logoAppleAppstore} className="menu-item-icon" />
                                Download on App Store
                            </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-link box-shadow-hover">
                                    <Icon icon={googleplayIcon} className="menu-item-icon" />
                                Download on Google Play
                            </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-link box-shadow-hover">
                                    <Icon icon={unorderedListOutlined} className="menu-item-icon" />
                                Products
                            </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-link box-shadow-hover">
                                    <Icon icon={stickyNote} className="menu-item-icon" />
                                Blog
                            </a>
                            </li>
                        </ul>
                    </div>

                    <div id="section">
                        <div className="section-title">
                            Main Links
                    </div>
                        <ul className="menu-sidebar">
                            <li className="menu-item">
                                <a className="menu-item-link color-hover">
                                    Home
                            </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-link color-hover">
                                    More
                            </a>
                                <ul className="menu-sidebar-child">
                                    <li className="menu-item">
                                        <a className="menu-item-link color-hover">Other Items</a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-item-link color-hover">Our websites</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div id="section" style={{ marginTop: '6rem' }}>
                        <div className="section-title">
                            Download
                    </div>
                        <ul className="menu-sidebar">
                            <li className="menu-item">
                                <a className="menu-item-link color-hover">
                                    App Store
                            </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-link color-hover">
                                    Google Play
                            </a>
                            </li>
                        </ul>
                    </div>
                    <div id="section">
                        <div className="section-title">
                            Users
                    </div>
                        <ul className="menu-sidebar">
                            <li className="menu-item">
                                <a className="menu-item-link color-hover">
                                    Profile
                            </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-link color-hover">
                                    Staffs
                            </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-link color-hover">
                                    Clients
                            </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-link color-hover">
                                    Admin
                            </a>
                            </li>
                        </ul>
                    </div>

                    <div id="section">
                        <div className="section-title">
                            Pages
                    </div>
                        <ul className="menu-sidebar">
                            <li className="menu-item">
                                <a className="menu-item-link color-hover">
                                    Client
                            </a>
                            </li>
                            <li className="menu-item">
                                <a className="menu-item-link color-hover">
                                    Admin dashboard
                            </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </>
    )
}

export default NavSmallDeviceComp
