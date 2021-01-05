import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import './NavBarComp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { MDBIcon} from 'mdbreact';
// import SimpleLineIcon from 'react-simple-line-icons';
export const NavBarComp = () => {



    
    return (
        <>
                <nav id="top-menu" className="grid-full">
                    <Grid container
                        direction="row"
                        justify="space-around"
                        wrap="nowrap"
                        alignItems="center">
                           
                        <Grid item xl={4} style={{'textAlign':'center'}}> 
                            <ul className="left-navbar">
                                <li>
                                    <button><FontAwesomeIcon icon={faBars} /></button>
                                </li>
                                <li>
                                    <input type="text" placeholder="Search"/>
                                    <label className="search-icon" htmlFor="">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </label>
                                </li>
                                <li className="languages-switch">
                                    <button>EN <FontAwesomeIcon icon={faCaretDown} /></button>
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
                        </Grid>
                        <Grid item xl={4}>
                                <span className="app-name">Gogo Coffee</span>
                        </Grid>
                        <Grid item xl={4} >
                            <ul className="right-navbar">
                                <li>
                                    <button className="switch-btn">
                                        <span className="switch-inside">
                                        </span>
                                    </button>
                                </li>
                                <li tabIndex={0} className="icons-menu-dropdown">
                                    {/* <SimpleLineIcon name="grid" /> */}
                                    <FontAwesomeIcon icon={faThLarge} />
                                    <div  className="pages-list">
                                        <div className="icon-menu-item">
                                            <FontAwesomeIcon className="icon-item" icon={faStore} />
                                            Dashboards
                                        </div>
                                        <div className="icon-menu-item">
                                            
                                            UI
                                        </div>
                                        <div className="icon-menu-item">
                                            <FontAwesomeIcon className="icon-item" icon={faChartBar} />
                                            Charts
                                        </div>
                                        <div className="icon-menu-item">
                                            <MDBIcon className="icon-item" far icon="comment" />
                                            Chat
                                        </div>
                                        <div className="icon-menu-item">Survey</div>
                                        <div className="icon-menu-item">
                                            <FontAwesomeIcon className="icon-item" icon={faCheck} />
                                            To-do-List
                                        </div>
                                    </div>
                                </li>
                                <li tabIndex={0} className="notification">
                                    <MDBIcon far icon="bell" className="noti-icon" />
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
                                        <FontAwesomeIcon icon={faExpandArrowsAlt} />
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
                       
                        </Grid>
                    </Grid>
                </nav>
        </>
    )
}
