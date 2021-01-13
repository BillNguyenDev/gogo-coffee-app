import React, { useState } from 'react'
import './NavBarComp.scss';
import { Icon, InlineIcon } from '@iconify/react';
import grid from '@iconify/icons-simple-line-icons/grid';
import bell from '@iconify/icons-simple-line-icons/bell';
import sizeFullscreen from '@iconify-icons/simple-line-icons/size-fullscreen';
import shopWindow from '@iconify-icons/bi/shop-window';
import pantoneLine from '@iconify-icons/ri/pantone-line';
import chartIcon from '@iconify-icons/cil/chart';
import chatIcon from '@iconify-icons/bi/chat';
import listCheck from '@iconify-icons/bi/list-check';
import mathFormula24Regular from '@iconify-icons/fluent/math-formula-24-regular';
import caretDown from '@iconify-icons/fa-solid/caret-down';
import searchOutlined from '@iconify-icons/ant-design/search-outlined';

export const NavBarComp = () => {
    return (
        <>
                <nav id="top-menu" className="grid-full">
                           <div className="row nowrap justify-content-around align-items-center">
                            <div className="col-xl-4" style={{'textAlign':'center'}}> 
                                <ul className="left-navbar">
                                    <li>
                                        <button>
                                            <div className="short-bars">
                                                <i></i>
                                                <i></i>
                                                <i></i>
                                            </div>
                                            <div className="long-bars">
                                                <i></i>
                                                <i></i>
                                                <i></i>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <input type="text" placeholder="Search"/>
                                        <label className="search-icon" htmlFor="">
                                            <InlineIcon icon={searchOutlined} />
                                        </label>
                                    </li>
                                    <li className="languages-switch">
                                        <button>EN <Icon icon={caretDown} /></button>
                                        <ul className="languages">
                                            <li tabIndex={0}>Enlish-LTR</li>
                                            <li tabIndex={0}>Espanol</li>
                                            <li tabIndex={0}>English-RTL</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button>Buy</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-4">
                                    <span className="app-name">Gogo Coffee</span>
                            </div>
                            <div className="col-xl-4" >
                                <ul className="right-navbar">
                                    <li>
                                        <button className="switch-btn">
                                            <span className="switch-inside">
                                            </span>
                                        </button>
                                    </li>
                                    <li tabIndex={0} className="icons-menu-dropdown">
                                       <InlineIcon icon={grid} className="icon-grid"  />
                                        <div  className="pages-list">
                                            <div className="icon-menu-item">
                                                <InlineIcon icon={shopWindow} className="icon-item" />
                                                Dashboards
                                            </div>
                                            <div className="icon-menu-item">
                                                <InlineIcon icon={pantoneLine} className="icon-item" />
                                                UI
                                            </div>
                                            <div className="icon-menu-item">
                                                <InlineIcon icon={chartIcon} className="icon-item" />
                                                Charts
                                            </div>
                                            <div className="icon-menu-item">
                                                <InlineIcon icon={chatIcon} className="icon-item" />
                                                Chat
                                            </div>
                                            <div className="icon-menu-item">
                                                <InlineIcon icon={mathFormula24Regular} className="icon-item"/>
                                                Survey
                                            </div>
                                            <div className="icon-menu-item">
                                                <InlineIcon icon={listCheck}  className="icon-item" />
                                                To-do-List
                                            </div>
                                        </div>
                                    </li>
                                    <li tabIndex={0} className="notification">
                                        <InlineIcon icon={bell} className="noti-icon"  />
                                        <div className="noti-quantities">
                                            3
                                        </div>
                                        <div className="noti-list">
                                        <ul className="noti-ul">
                                            <li>
                                                <span className="noti-img padding">
                                                    <img src="https://gogo-react.coloredstrategies.com/assets/img/profiles/l-2.jpg" alt=""/>
                                                </span>
                                                <div className="noti-content padding">
                                                    <p>Joisse Kaycee just sent a new comment!</p>
                                                    <p className="date">09.04.2018 - 12:45</p>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="noti-img padding">
                                                    <img src="https://gogo-react.coloredstrategies.com/assets/img/notifications/thumb-1.jpg" alt=""/>
                                                </span>
                                                <div className="noti-content padding">
                                                    <p>1 item is out of stock!</p>
                                                    <p className="date">09.04.2018 - 12:45</p>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="noti-img padding">
                                                    <img src="https://gogo-react.coloredstrategies.com/assets/img/notifications/thumb-2.jpg" alt=""/>
                                                </span>
                                                <div className="noti-content padding">
                                                    <p>New order received! It is total $147,20.</p>
                                                    <p className="date">09.04.2018 - 12:45</p>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="noti-img padding">
                                                    <img src="https://gogo-react.coloredstrategies.com/assets/img/notifications/thumb-3.jpg" alt=""/>
                                                </span>
                                                <div className="noti-content padding">
                                                    <p>3 items just added to wish list by a user!</p>
                                                    <p className="date">09.04.2018 - 12:45</p>
                                                </div>
                                            </li>
                                        </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <button className="full-screen-btn">
                                            <InlineIcon icon={sizeFullscreen} />
                                        </button>
                                    </li>
                                    <li tabIndex={0} className="profile">
                                            <span className="account-name">hoanbao32@gmail.com</span>
                                            <span className="acc-img" >
                                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="account"/>
                                            </span>
                                        <ul className="profile-dropdown">
                                            <li tabIndex={0}>Account</li>
                                            <li tabIndex={0}>Features</li>
                                            <li tabIndex={0}>History</li>
                                            <li tabIndex={0}>Support</li>
                                            <li className="line"></li>
                                            <li tabIndex={0}>Sign out</li>
                                        </ul>
                                    </li>
                                </ul>
                        
                            </div>

                           </div>
                </nav>
        </>
    )
}