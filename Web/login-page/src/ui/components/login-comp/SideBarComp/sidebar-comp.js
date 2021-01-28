import React from 'react'
import './sidebar-comp.scss';
import { Icon } from '@iconify/react';
import news28Regular from '@iconify-icons/fluent/news-28-regular';
import usersBold from '@iconify-icons/ph/users-bold';
import userOutlined from '@iconify-icons/ant-design/user-outlined';
import bellIcon from '@iconify-icons/cil/bell';
import logoAppleAppstore from '@iconify-icons/ion/logo-apple-appstore';
import googleplayIcon from '@iconify-icons/simple-icons/googleplay';
import unorderedListOutlined from '@iconify-icons/ant-design/unordered-list-outlined';
import stickyNote from '@iconify-icons/vs/sticky-note';
const SideBarComp = () => {
    return (
        <>
            <nav id="side-bar" className="delayed hidden">
                <ul className="menu-sidebar">
                    <li className="menu-item">
                        <div className="menu-item-link">
                            <Icon icon={news28Regular} />
                            <div className="menu-item-name" >
                                <p>Posts</p>
                            </div>
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="menu-item-link">
                            <Icon icon={usersBold} />
                            <div className="menu-item-name" >
                                <p>Staffs</p>
                            </div>
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="menu-item-link">
                            <Icon icon={userOutlined} />
                            <div className="menu-item-name" >
                                <p>Profile</p>
                            </div>
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="menu-item-link">
                            <Icon icon={bellIcon} />
                            <div className="menu-item-name" >
                                <p>Notifications</p>
                            </div>
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="menu-item-link">
                            <Icon icon={logoAppleAppstore} />
                            <div className="menu-item-name" >
                                <p>Download on App Store</p>
                            </div>
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="menu-item-link">
                            <Icon icon={googleplayIcon} />
                            <div className="menu-item-name" >
                                <p>Download on Google Play</p>
                            </div>
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="menu-item-link">
                            <Icon icon={unorderedListOutlined} />
                            <div className="menu-item-name" >
                                <p>Products</p>
                            </div>
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="menu-item-link">
                            <Icon icon={stickyNote} />
                            <div className="menu-item-name" >
                                <p>Blogs</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SideBarComp
