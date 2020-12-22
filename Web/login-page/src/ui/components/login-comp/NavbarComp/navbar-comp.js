import React, { useState } from 'react'
import './navbar-comp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import { faThLarge } from '@fortawesome/fontawesome-free-solid';
const NavBarComp = () => {
    return (
        <>
            {/* <FontAwesomeIcon icon="bars" className="bars" /> */}



            <section id="top-menu" className="grid-full">
                <div className="action">
                    <div className="hidden-logo">
                        <img src="../../../../img/png-clipart-brown-coffee-mug-logo-coffee-cup-cappuccino-cafe-hot-coffee-diagram-glass-hand.png" alt="" width="60px" height="50px" />
                    </div>
                    <div className="icon-bars">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
                <ul className="left">
                    <li className="logo">
                        <img src="../../../../img/png-clipart-brown-coffee-mug-logo-coffee-cup-cappuccino-cafe-hot-coffee-diagram-glass-hand.png" width="60px" height="50px" alt="" />
                                Gogo Coffee
                        </li>
                    <li><FontAwesomeIcon icon={faThLarge} /></li>
                    <li>Home</li>
                    <li className="li-parent">Feature <FontAwesomeIcon icon="chevron-down" className="chevron-down-icon" />
                        <div className="dropdown1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <ul className="list-child">
                                            <li>Item 1</li>
                                            <li>Item 2</li>
                                            <li>Item 3</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className="list-child">
                                            <li>Item 1</li>
                                            <li>Item 2</li>
                                            <li>Item 3</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className="list-child">
                                            <li>Item 1</li>
                                            <li>Item 2</li>
                                            <li>Item 3</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="li-parent">More <FontAwesomeIcon icon="chevron-down" className="chevron-down-icon" />
                        <div className="dropdown2">
                            <ul className="list-child">
                                <li>Option1</li>
                                <li>Option2</li>
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