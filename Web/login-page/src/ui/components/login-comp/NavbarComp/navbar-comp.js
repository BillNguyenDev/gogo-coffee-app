import React, { useState } from 'react'
import './navbar-comp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';

const NavBarComp = () => {
    return (
        <>
            <div className="navbar-menu">
                <span className="icon">
                    <FontAwesomeIcon icon="bars" className="bars" />
                </span>
                <ul className="menu-list">
                    <li className="item logo">
                        <img src="https://e7.pngegg.com/pngimages/161/115/png-clipart-brown-coffee-mug-logo-coffee-cup-cappuccino-cafe-hot-coffee-diagram-glass-hand.png"
                            alt="" />
                        <span>Gogo Coffee</span>
                    </li>
                    <li className="item">Home</li>
                    <li className="item features">Features
                        <FontAwesomeIcon icon="chevron-down" className="chevron-down-icon" />
                        <div className="dropdownlist1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <ul>
                                            <li className="child-item">Item 1</li>
                                            <li className="child-item">Item 2</li>
                                            <li className="child-item">Item 3</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul>
                                            <li className="child-item">Item 4</li>
                                            <li className="child-item">Itm 5</li>
                                            <li className="child-item">Item 6</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul>
                                            <li className="child-item">Item 7</li>
                                            <li className="child-item">Item 8</li>
                                            <li className="child-item">Item 9</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="item more">More
                        <FontAwesomeIcon icon="chevron-down" className="chevron-down-icon" />
                        <ul className="dropdownlist2">
                            <li className="child-item">Option1</li>
                            <li className="child-item">Option2</li>
                        </ul>
                    </li>
                    <li className="item search">
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <input placeholder="Search term" />
                    </li>
                </ul>
            </div>
        </>
    )
}
export default NavBarComp