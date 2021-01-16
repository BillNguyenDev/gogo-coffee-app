import React from 'react'
import './FullSideBarComp.scss';
import { Icon, InlineIcon } from '@iconify/react';
import news28Regular from '@iconify-icons/fluent/news-28-regular';
import usersBold from '@iconify-icons/ph/users-bold';
import userOutlined from '@iconify-icons/ant-design/user-outlined';
import bellIcon from '@iconify-icons/cil/bell';
import logoAppleAppstore from '@iconify-icons/ion/logo-apple-appstore';
import googleplayIcon from '@iconify-icons/simple-icons/googleplay';
import androidIcon from '@iconify-icons/cib/android';
import unorderedListOutlined from '@iconify-icons/ant-design/unordered-list-outlined';
import stickyNote from '@iconify-icons/vs/sticky-note';
const FullSideBarComp = () => {
    return (
        <>
            <nav id="full-sidebar" className="delayed hidden">
                <div id="section">
                    <ul className="menu-sidebar">
                        <li className="menu-item">
                            <div className="menu-item-link ">
                                <Icon icon={news28Regular} className="menu-item-icon" />
                                Posts
                                </div>
                        </li>
                        <li className="menu-item">
                            <div className="menu-item-link ">
                                <Icon icon={usersBold} className="menu-item-icon" />
                                Staffs
                                </div>
                        </li>
                        <li className="menu-item">
                            <div className="menu-item-link ">
                                <Icon icon={userOutlined} className="menu-item-icon" />
                                Profile
                                </div>
                        </li>
                        <li className="menu-item">
                            <div className="menu-item-link ">
                                <Icon icon={bellIcon} className="menu-item-icon" />
                                Notifications
                                </div>
                        </li>
                        <li className="menu-item">
                            <div className="menu-item-link ">
                                <Icon icon={logoAppleAppstore} className="menu-item-icon" />
                                Download on App Store
                                </div>
                        </li>
                        <li className="menu-item">
                            <div className="menu-item-link ">
                                <Icon icon={googleplayIcon} className="menu-item-icon" />
                                Download on Google Play
                                </div>
                        </li>
                        <li className="menu-item">
                            <div className="menu-item-link ">
                                <Icon icon={unorderedListOutlined} className="menu-item-icon" />
                                Products
                                </div>
                        </li>
                        <li className="menu-item">
                            <div className="menu-item-link ">
                                <Icon icon={stickyNote} className="menu-item-icon" />
                                Blogs
                                </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default FullSideBarComp
