import React, { useState } from 'react'
import './navbar-comp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const NavBarComp = () => {
    return (
        <>
            <div className="navbar-menu">
                <span className="icon">
                    <FontAwesomeIcon icon="bars" className="bars" />
                </span>
                <ul className="menu-list">
                    <li className="item search">
                        {/* <FontAwesomeIcon icon={faSearch} className="search-icon" /> */}
                        <input placeholder="Search term" />
                    </li>
                </ul>
            </div>
        </>
    )
}
export default NavBarComp