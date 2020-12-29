import React, { useState } from 'react'
import './navbar-comp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import SimpleLineIcon from 'react-simple-line-icons';
import logo from './../../../../img/logo3.png';
const NavBarComp = () => {
    return (
        <>
            {/* <FontAwesomeIcon icon="bars" className="bars" /> */}
            <section id="top-menu" className="grid-full">
                <div className="action">
                    <div className="hidden-logo">
                        <img src={logo} alt="" width="60px" height="50px" />
                    </div>
                    <div className="icon-bars">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
                <ul className="left">
                    <li className="logo">
                        <img src={logo} alt="" width="60px" height="50px" />
                                Gogo Coffee
                        </li>
                    <li>
                        <SimpleLineIcon name="grid" />
                    </li>
                    <li>Home</li>
                    <li className="li-parent">Feature <FontAwesomeIcon icon="chevron-down" className="chevron-down-icon" />
                        <div className="dropdown1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <ul className="ul-child">
                                            <li className="li-child-title">Download</li>
                                            <li className="li-child-item">App Store</li>
                                            <li className="li-child-item">Google Play</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className="ul-child">
                                            <li className="li-child-title">Users</li>
                                            <li className="li-child-item">Profile</li>
                                            <li className="li-child-item">Staffs</li>
                                            <li className="li-child-item">Clients</li>
                                            <li className="li-child-item">Admin</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className="ul-child">
                                            <li className="li-child-title">Pages</li>
                                            <li className="li-child-item">Client</li>
                                            <li className="li-child-item">Admin dashboard</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="li-parent">More <FontAwesomeIcon icon="chevron-down" className="chevron-down-icon" />
                        <div className="dropdown2">
                            <ul className="ul-child">
                                <li>Other items</li>
                                <li>Our website</li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="search">
                    <input className="search-input" type="text" placeholder="Search here" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
                <button className="right">Login</button>
            </section>
        </>
    )
}
export default NavBarComp