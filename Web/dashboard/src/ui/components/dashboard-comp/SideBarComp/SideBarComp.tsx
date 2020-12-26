import React from 'react';
import './SideBarComp.scss';



export const SideBarComp = () => {
    
    return (
        <>
        <section id="vertical-sidebar">
            <ul className="tabs">
                <li>Dashboards</li>
                <li>Pages</li>
                <li>Applications</li>
                <li>UI</li>
                <li>Menu</li>
            </ul>
            <div className="sub-menu">
                <ul className="dashboard">
                    <li>Default</li>
                    <li>Analytics</li>
                    <li>Ecommerce</li>
                    <li>Content</li>
                </ul>
            </div>
        </section>
        </>
    )
}
