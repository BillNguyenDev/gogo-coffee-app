import React from 'react'
import './NavSmallDeviceComp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/fontawesome-free-solid';
import { faNewspaper } from '@fortawesome/fontawesome-free-solid';
import { faUsers } from '@fortawesome/fontawesome-free-solid';
import { faList } from '@fortawesome/fontawesome-free-solid';
import { faStickyNote } from '@fortawesome/fontawesome-free-solid';
import { faUser } from '@fortawesome/fontawesome-free-solid';
import { faBell } from '@fortawesome/fontawesome-free-solid';
import { faAppStore } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
const NavSmallDeviceComp = () => {
    return (
        <>
            <div className="overlay"></div>
            <section id="nav-widget-small-device">
                <div className="close-arrow-button">
                    <button>
                        <FontAwesomeIcon icon={faArrowLeft} className="arrow-left-icon" />
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
                                <FontAwesomeIcon icon={faNewspaper} className="menu-item-icon" />
                                Posts
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-item-link box-shadow-hover">
                                <FontAwesomeIcon icon={faUsers} className="menu-item-icon" />
                                Staffs
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-item-link box-shadow-hover">
                                <FontAwesomeIcon icon={faUser} className="menu-item-icon" />
                                Profile
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-item-link box-shadow-hover">
                                <FontAwesomeIcon icon={faBell} className="menu-item-icon" />
                                Notifications
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-item-link box-shadow-hover">
                                <FontAwesomeIcon icon={faAppStore} className="menu-item-icon" />
                                Download on App Store
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-item-link box-shadow-hover">
                                <FontAwesomeIcon icon={faGooglePlay} className="menu-item-icon" />
                                Download on Google Play
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-item-link box-shadow-hover">
                                <FontAwesomeIcon icon={faAndroid} className="menu-item-icon" />
                                Download on Google Play
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-item-link box-shadow-hover">
                                <FontAwesomeIcon icon={faList} className="menu-item-icon" />
                                Products
                            </a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-item-link box-shadow-hover">
                                <FontAwesomeIcon icon={faStickyNote} className="menu-item-icon" />
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
            </section>
        </>
    )
}

export default NavSmallDeviceComp
