import React from 'react'
import { FooterComp } from '../components/dashboard-comp/FooterComp/FooterComp'
import { MainDashBoard } from '../components/dashboard-comp/MainDashBoard/MainDashBoard'
import { NavBarComp } from '../components/dashboard-comp/NavBarComp/NavBarComp'
import { SideBarComp } from '../components/dashboard-comp/SideBarComp/SideBarComp'

export const DashBoardPage = () => {
    return (
        <div>
            <NavBarComp/>
            <SideBarComp/>
            <MainDashBoard/>
            <FooterComp/>
        </div>
    )
}
