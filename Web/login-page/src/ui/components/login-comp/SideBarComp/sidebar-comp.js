import React from 'react'
import './sidebar-comp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/fontawesome-free-solid';
import { faUsers } from '@fortawesome/fontawesome-free-solid';
import { faList } from '@fortawesome/fontawesome-free-solid';
import { faStickyNote } from '@fortawesome/fontawesome-free-solid';
import { faUser } from '@fortawesome/fontawesome-free-solid';
import { faBell } from '@fortawesome/fontawesome-free-solid';
import { faAppStore } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
const SideBarComp = () => {
    return (
        <>
            <nav id="side-bar">
                <ul className="menu-sidebar">
                    <li className="menu-item">
                        <a className="menu-item-link">
                            <FontAwesomeIcon icon={faNewspaper} />
                            <div className="menu-item-name" style={{ opacity: 0, visibility: 'hidden', transform: 'translate(10px, 0px)' }}>
                                <p>Posts</p>
                            </div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a className="menu-item-link">
                            <FontAwesomeIcon icon={faUsers} />
                            <div className="menu-item-name" style={{ opacity: 0, visibility: 'hidden', transform: 'translate(10px, 0px)' }}>
                                <p>Staffs</p>
                            </div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a className="menu-item-link">
                            <FontAwesomeIcon icon={faUser} />
                            <div className="menu-item-name" style={{ opacity: 0, visibility: 'hidden', transform: 'translate(10px, 0px)' }}>
                                <p>Profile</p>
                            </div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a className="menu-item-link">
                            <FontAwesomeIcon icon={faBell} />
                            <div className="menu-item-name" style={{ opacity: 0, visibility: 'hidden', transform: 'translate(10px, 0px)' }}>
                                <p>Notifications</p>
                            </div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a className="menu-item-link">
                            <FontAwesomeIcon icon={faAppStore} />
                            <div className="menu-item-name" style={{ opacity: 0, visibility: 'hidden', transform: 'translate(10px, 0px)' }}>
                                <p>Download on App Store</p>
                            </div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a className="menu-item-link">
                            <FontAwesomeIcon icon={faGooglePlay} />
                            <div className="menu-item-name" style={{ opacity: 0, visibility: 'hidden', transform: 'translate(10px, 0px)' }}>
                                <p>Download on Google Play</p>
                            </div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a className="menu-item-link">
                            <FontAwesomeIcon icon={faAndroid} />
                            <div className="menu-item-name" style={{ opacity: 0, visibility: 'hidden', transform: 'translate(10px, 0px)' }}>
                                <p>Download on Google Play</p>
                            </div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a className="menu-item-link">
                            <FontAwesomeIcon icon={faList} />
                            <div className="menu-item-name" style={{ opacity: 0, visibility: 'hidden', transform: 'translate(10px, 0px)' }}>
                                <p>Products</p>
                            </div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a className="menu-item-link">
                            <FontAwesomeIcon icon={faStickyNote} />
                            <div className="menu-item-name" style={{ opacity: 0, visibility: 'hidden', transform: 'translate(10px, 0px)' }}>
                                <p>Products</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SideBarComp
