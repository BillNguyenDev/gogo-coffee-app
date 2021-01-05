import React from 'react';
import './SideBarComp.scss';



export const SideBarComp = () => {
    
    return (
        <>
        <section id="vertical-sidebar">
            <div className="main-vertical-menu border-radius-toggle">
                <ul className="main-ul">
                    <li className="active"><a>Dashboard</a></li>
                    <li><a>Pages</a></li>
                    <li><a>Applications</a></li>
                    <li><a>UI</a></li>
                    <li><a>Menu</a></li>
                    <li><a style={{borderBottom:"none"}}>About</a></li>
                </ul>
            </div>
            <div className="sub-vertical-menu display-none display-show">
                {/* <ul className="sub-ul">
                    <li><a>Default</a></li>
                    <li><a>Analytics</a></li>
                    <li><a>Ecommerce</a></li>
                    <li><a>Content</a></li>
                </ul> */}


                 {/* <ul className="sub-ul">
                    <li><a>To-do List</a></li>
                    <li><a>Survey</a></li>
                    <li><a>Chat</a></li>
                </ul> */}


                 {/* <ul className="sub-ul page-ul">
                    <li><a >Authorization</a>
                        <div className="ul-child-dropdown">
                            <ul className="ul-child">
                                <li><a>Login</a></li>
                                <li><a>Register</a></li>
                                <li><a>Forgot Password</a></li>
                                <li><a>Reset Password</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a>Product</a>
                        <div className="ul-child-dropdown">
                            <ul className="ul-child">
                                <li><a>Data List</a></li>
                                <li><a>Thumb List</a></li>
                                <li><a>Image List</a></li>
                                <li><a>Details</a></li>
                                <li><a>Details Alt</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a>Profile</a>
                        <div className="ul-child-dropdown">
                            <ul className="ul-child">
                                <li><a>Social</a></li>
                                <li><a>Portfolio</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a>Blog</a>
                        <div className="ul-child-dropdown">
                            <ul className="ul-child">
                                <li><a>Blog List</a></li>
                                <li><a>Blog Detail</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a>Miscellaneous</a>
                        <div className="ul-child-dropdown">
                            <ul className="ul-child">
                                <li><a>Faq</a></li>
                                <li><a>Knowledege Base</a></li>
                                <li><a>Prices</a></li>
                                <li><a>Search</a></li>
                                <li><a>Mailing</a></li>
                                <li><a>Invoice</a></li>
                                <li><a>Error</a></li>
                            </ul>
                        </div>
                    </li>
                </ul> */}
                
                 <ul className="sub-ul ul-toggle">
                    <li><a>Forms</a>
                        <div className="ul-child-dropdown">
                            <ul className="ul-child">
                                <li><a>Layouts</a></li>
                                <li><a>Components</a></li>
                                <li><a>Validations</a></li>
                                <li><a>Wizard</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a>Components</a>
                        <div className="ul-child-dropdown">
                            <ul className="ul-child">
                                <li><a>Alerts</a></li>
                                <li><a>Badges</a></li>
                                <li><a>Buttons</a></li>
                                <li><a>Cards</a></li>
                                <li><a>Carousel</a></li>
                                <li><a>Charts</a></li>
                                <li><a>Collapse</a></li>
                                <li><a>Dropdowns</a></li>
                                <li><a>Editors</a></li>
                                <li><a>Icons</a></li>
                                <li><a>Input Groups</a></li>
                                <li><a>Jumbotron</a></li>
                                <li><a>Maps</a></li>
                                <li><a>Modal</a></li>
                                <li><a>Navigation</a></li>
                                <li><a>Popover & Tooltip</a></li>
                                <li><a>Sortable</a></li>
                                <li><a>Tables</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}
